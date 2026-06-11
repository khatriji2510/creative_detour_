export function formatPrice(price) {
  return new Intl.NumberFormat("en-IN", {
    style: "currency",
    currency: "INR",
    maximumFractionDigits: 0
  }).format(price);
}

export function mediaNode(media) {
  const wrapper = document.createElement("div");
  wrapper.className = "product-card__media-inner";

  if (!media || !media.type) {
    wrapper.innerHTML = `<div class="fallback-media"></div>`;
    return wrapper;
  }

  if (media.type === "video") {
    const video = document.createElement("video");
    video.src = media.src;
    video.poster = media.poster || "";
    video.muted = true;
    video.loop = true;
    video.playsInline = true;
    video.autoplay = true;
    video.preload = "metadata";
    video.setAttribute("aria-label", media.alt || "Product video");
    wrapper.appendChild(video);
  } else {
    const img = document.createElement("img");
    img.src = media.src;
    img.alt = media.alt || "Product media";
    img.loading = "lazy";
    img.decoding = "async";
    wrapper.appendChild(img);
  }

  return wrapper;
}

export function createProductCard(product) {
  const card = document.createElement("article");
  card.className = "product-card reveal";
  card.dataset.categories = (product.categories || []).join(",");

  const media = document.createElement("div");
  media.className = "product-card__media";
  media.appendChild(mediaNode(product.media));

  const overlay = document.createElement("div");
  overlay.className = "product-card__overlay";

  if (product.badge) {
    const badge = document.createElement("span");
    badge.className = "badge";
    badge.textContent = product.badge;
    overlay.appendChild(badge);
  } else {
    const spacer = document.createElement("span");
    overlay.appendChild(spacer);
  }

  const overlayLabel = document.createElement("span");
  overlayLabel.className = "card-link";
  overlayLabel.textContent = "View details";
  overlay.appendChild(overlayLabel);

  media.appendChild(overlay);

  const body = document.createElement("div");
  body.className = "product-card__body";

  const title = document.createElement("h3");
  title.className = "product-card__title";
  title.textContent = product.title;

  const meta = document.createElement("div");
  meta.className = "product-card__meta";

  const price = document.createElement("span");
  price.className = "price";
  price.textContent = formatPrice(product.price);

const cta = document.createElement("a");

cta.className = "card-link";

cta.textContent = "Buy Now";

cta.href = product.buyLink;

cta.target = "_blank";

cta.rel = "noopener noreferrer";

  meta.append(price, cta);
  body.append(title, meta);

  card.append(media, body);
  return card;
}

export function setupMobileNav() {
  const toggle = document.querySelector(".nav-toggle");
  const nav = document.querySelector(".site-nav");

  if (!toggle || !nav) return;

  const closeNav = () => {
    toggle.classList.remove("is-open");
    nav.classList.remove("is-open");
    toggle.setAttribute("aria-expanded", "false");
  };

  toggle.addEventListener("click", () => {
    const isOpen = nav.classList.toggle("is-open");
    toggle.classList.toggle("is-open", isOpen);
    toggle.setAttribute("aria-expanded", String(isOpen));
  });

  nav.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", closeNav);
  });

  window.addEventListener("resize", () => {
    if (window.innerWidth > 760) closeNav();
  });
}

export function setupRevealAnimations() {
  const items = document.querySelectorAll(".reveal");

  if (!("IntersectionObserver" in window)) {
    items.forEach((item) => item.classList.add("is-visible"));
    return;
  }

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.14, rootMargin: "0px 0px -40px 0px" }
  );

  items.forEach((item) => observer.observe(item));
}

export function setupPageTransitions() {
  const internalLinks = [...document.querySelectorAll('a[href]')].filter((link) => {
    const href = link.getAttribute("href") || "";
    if (href.startsWith("mailto:") || href.startsWith("tel:") || href.startsWith("#")) return false;
    if (link.target === "_blank") return false;
    return href.endsWith(".html") || href.startsWith("./");
  });

  internalLinks.forEach((link) => {
    link.addEventListener("click", (event) => {
      const href = link.getAttribute("href");
      if (!href) return;
      if (href.includes("#") && !href.endsWith(".html")) return;

      event.preventDefault();
      document.body.classList.add("is-navigating");
      setTimeout(() => {
        window.location.href = href;
      }, 180);
    });
  });

  requestAnimationFrame(() => document.body.classList.add("is-ready"));
}
