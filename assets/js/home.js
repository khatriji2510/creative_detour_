import { heroSlides, featuredIds } from "./data/content.js";
import { products } from "./data/products.js";
import { createProductCard, setupMobileNav, setupPageTransitions, setupRevealAnimations } from "./shared.js";

function renderHeroSlide(slide) {
  const slideEl = document.createElement("div");
  slideEl.className = "hero__slide";

  const media = document.createElement("div");
  media.className = "hero__slide-media";

  if (slide.media.type === "video") {
    const video = document.createElement("video");
    video.src = slide.media.src;
    video.poster = slide.media.poster || "";
    video.autoplay = true;
    video.loop = true;
    video.muted = true;
    video.playsInline = true;
    video.preload = "metadata";
    video.setAttribute("aria-label", slide.media.alt || "Hero video");
    media.appendChild(video);
  } else {
    const img = document.createElement("img");
    img.src = slide.media.src;
    img.alt = slide.media.alt || "Hero media";
    img.loading = "eager";
    img.decoding = "async";
    media.appendChild(img);
  }

  slideEl.appendChild(media);
  return slideEl;
}

function setupHero() {
  const heroMedia = document.getElementById("heroMedia");
  const heroIndicators = document.getElementById("heroIndicators");
  const heroTitle = document.getElementById("heroTitle");
  const heroCopy = document.getElementById("heroCopy");
  const heroDrop = document.getElementById("heroDrop");
  const heroFocus = document.getElementById("heroFocus");
  const prevBtn = document.getElementById("heroPrev");
  const nextBtn = document.getElementById("heroNext");

  if (!heroMedia || !heroIndicators) return;

  const slides = heroSlides.map(renderHeroSlide);
  slides.forEach((slide) => heroMedia.appendChild(slide));

  const buttons = heroSlides.map((_, index) => {
    const btn = document.createElement("button");
    btn.className = "hero__indicator";
    btn.type = "button";
    btn.setAttribute("aria-label", `Go to slide ${index + 1}`);
    btn.addEventListener("click", () => activateSlide(index, true));
    heroIndicators.appendChild(btn);
    return btn;
  });

  let current = 0;
  let intervalId = null;
  let isHovering = false;
  let touchStartX = 0;

  function syncContent(index) {
    const slide = heroSlides[index];
    heroTitle.textContent = slide.title;
    heroCopy.textContent = slide.copy;
    heroDrop.textContent = slide.drop;
    heroFocus.textContent = slide.focus;
  }

  function activateSlide(index, userInitiated = false) {
    current = (index + slides.length) % slides.length;
    slides.forEach((slide, i) => slide.classList.toggle("is-active", i === current));
    buttons.forEach((btn, i) => btn.classList.toggle("is-active", i === current));
    syncContent(current);

    if (userInitiated) restartTimer();
  }

  function next() {
    activateSlide(current + 1);
  }

  function prev() {
    activateSlide(current - 1);
  }

  function restartTimer() {
    if (intervalId) clearInterval(intervalId);
    if (isHovering) return;
    intervalId = setInterval(next, 3000);
  }

  heroMedia.addEventListener("mouseenter", () => {
    isHovering = true;
    if (intervalId) clearInterval(intervalId);
  });

  heroMedia.addEventListener("mouseleave", () => {
    isHovering = false;
    restartTimer();
  });

  heroMedia.addEventListener("touchstart", (e) => {
    touchStartX = e.touches[0].clientX;
  }, { passive: true });

  heroMedia.addEventListener("touchend", (e) => {
    const touchEndX = e.changedTouches[0].clientX;
    const delta = touchEndX - touchStartX;
    if (Math.abs(delta) > 45) {
      delta < 0 ? next() : prev();
    }
  }, { passive: true });

  prevBtn?.addEventListener("click", prev);
  nextBtn?.addEventListener("click", next);

  activateSlide(0);
  restartTimer();
}

function renderFeatured() {
  const featuredGrid = document.getElementById("featuredGrid");
  if (!featuredGrid) return;

  const selected = featuredIds
    .map((id) => products.find((product) => product.id === id))
    .filter(Boolean);

  featuredGrid.innerHTML = "";
  selected.forEach((product) => featuredGrid.appendChild(createProductCard(product)));

  // Animate newly inserted cards
  setupRevealAnimations();
}

setupPageTransitions();
setupMobileNav();
setupHero();
renderFeatured();
