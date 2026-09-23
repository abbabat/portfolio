"use strict";

// Progressive enhancement: links, projects, and role details work without JS.
const header = document.querySelector(".site-header");
const menuButton = document.querySelector(".menu-toggle");
const navigation = document.querySelector("#navigation");
if (header && menuButton && navigation) {
  header.classList.add("js-nav");
  menuButton.hidden = false;
  // CSS controls whether the enhanced menu button is needed on a given screen.
  const mobile = window.matchMedia("(max-width: 700px)");
  function closeMenu() {
    menuButton.setAttribute("aria-expanded", "false");
    navigation.classList.remove("is-open");
  }
  function syncMenu() {
    menuButton.hidden = !mobile.matches;
    closeMenu();
  }
  syncMenu();
  mobile.addEventListener("change", syncMenu);
  menuButton.addEventListener("click", () => {
    const open = menuButton.getAttribute("aria-expanded") !== "true";
    menuButton.setAttribute("aria-expanded", String(open));
    navigation.classList.toggle("is-open", open);
  });
  navigation.addEventListener("click", (event) => {
    if (event.target.closest("a")) closeMenu();
  });
  document.addEventListener("keydown", (event) => {
    if (
      event.key === "Escape" &&
      menuButton.getAttribute("aria-expanded") === "true"
    ) {
      closeMenu();
      menuButton.focus();
    }
  });
}

const filters = document.querySelector(".filters");
if (filters) {
  filters.hidden = false;
  const projects = [...document.querySelectorAll("[data-category]")];
  filters.addEventListener("click", (event) => {
    const button = event.target.closest("button[data-filter]");
    if (!button) return;
    filters.querySelectorAll("button").forEach((item) => {
      const active = item === button;
      item.classList.toggle("active", active);
      item.setAttribute("aria-pressed", String(active));
    });
    let count = 0;
    projects.forEach((project) => {
      project.hidden =
        button.dataset.filter !== "all" &&
        project.dataset.category !== button.dataset.filter;
      if (!project.hidden) count++;
    });
    document.querySelector("#filter-status").textContent =
      `${count} projects shown.`;
  });
}

const copyButton = document.querySelector("#copy-email");
if (copyButton && navigator.clipboard && window.isSecureContext) {
  copyButton.hidden = false;
  copyButton.addEventListener("click", async () => {
    const status = document.querySelector("#copy-status");
    try {
      await navigator.clipboard.writeText("atour095@uottawa.ca");
      status.textContent = "Email copied.";
    } catch {
      status.textContent = "Please copy the email address above.";
    }
  });
}
const year = document.querySelector("#year");
if (year) year.textContent = String(new Date().getFullYear());
