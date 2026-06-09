import { categories } from "./data/categories.js";
import { products } from "./data/products.js";
import { createProductCard, setupMobileNav, setupPageTransitions, setupRevealAnimations } from "./shared.js";

const categoryFilters = document.getElementById("categoryFilters");
const productGrid = document.getElementById("productGrid");
const resultsLabel = document.getElementById("resultsLabel");
const resultsCount = document.getElementById("resultsCount");
const totalProducts = document.getElementById("totalProducts");
const filtersToggle = document.getElementById("filtersToggle");
const filtersBody = document.getElementById("filtersBody");
const filtersPanel = document.querySelector(".filters-panel");

let activeCategory = "All";

function renderFilters() {
  if (!categoryFilters) return;

  categoryFilters.innerHTML = "";
  categories.forEach((category) => {
    const button = document.createElement("button");
    button.type = "button";
    button.className = "filter-chip";
    button.textContent = category;
    button.dataset.category = category;
    button.setAttribute("aria-pressed", String(category === activeCategory));
    if (category === activeCategory) button.classList.add("is-active");

    button.addEventListener("click", () => {
      activeCategory = category;
      renderFilters();
      renderProducts();
    });

    categoryFilters.appendChild(button);
  });
}

function renderProducts() {
  if (!productGrid) return;

  const filtered = activeCategory === "All"
    ? products
    : products.filter((product) => (product.categories || []).includes(activeCategory));

  productGrid.innerHTML = "";

  if (!filtered.length) {
    productGrid.innerHTML = `
      <div class="empty-state">
        <h3>No products in this category yet.</h3>
        <p>Add products in <strong>assets/js/data/products.js</strong> and assign the matching category name.</p>
      </div>
    `;
  } else {
    filtered.forEach((product) => productGrid.appendChild(createProductCard(product)));
  }

  if (resultsLabel) resultsLabel.textContent = activeCategory === "All" ? "All items" : activeCategory;
  if (resultsCount) resultsCount.textContent = `${filtered.length} product${filtered.length === 1 ? "" : "s"}`;
  if (totalProducts) totalProducts.textContent = String(products.length).padStart(2, "0");
}

function setupFiltersPanel() {
  if (!filtersToggle || !filtersBody || !filtersPanel) return;

  const applyMobileState = () => {
    if (window.innerWidth <= 760) {
      filtersPanel.classList.add("is-collapsed");
      filtersToggle.setAttribute("aria-expanded", "false");
    } else {
      filtersPanel.classList.remove("is-collapsed");
      filtersToggle.setAttribute("aria-expanded", "true");
    }
  };

  applyMobileState();

  filtersToggle.addEventListener("click", () => {
    const isCollapsed = filtersPanel.classList.toggle("is-collapsed");
    filtersToggle.setAttribute("aria-expanded", String(!isCollapsed));
  });

  window.addEventListener("resize", applyMobileState);
}

setupPageTransitions();
setupMobileNav();
setupRevealAnimations();
setupFiltersPanel();
renderFilters();
renderProducts();
