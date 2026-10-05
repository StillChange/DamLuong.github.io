"use strict";
document.documentElement.classList.add("js");

const year = document.querySelector("[data-year]");
if (year) year.textContent = new Date().getFullYear();

const menu = document.querySelector(".menu-toggle");
const nav = document.querySelector("#main-nav");
if (menu && nav) {
  const closeMenu = () => {
    menu.setAttribute("aria-expanded", "false");
    nav.classList.remove("is-open");
  };
  menu.addEventListener("click", () => {
    const open = menu.getAttribute("aria-expanded") !== "true";
    menu.setAttribute("aria-expanded", String(open));
    nav.classList.toggle("is-open", open);
  });
  nav.addEventListener("click", (event) => {
    const link = event.target.closest("a");
    if (!link) return;
    closeMenu();
    const destination = document.getElementById(link.hash.slice(1));
    if (destination) {
      destination.tabIndex = -1;
      destination.focus({ preventScroll: true });
    }
  });
  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape" && menu.getAttribute("aria-expanded") === "true") {
      closeMenu();
      menu.focus();
    }
  });
  window.matchMedia("(min-width: 961px)").addEventListener("change", closeMenu);
}

// Native image links remain usable when scripting or the dialog API is unavailable.
const dialog = document.querySelector(".image-dialog");
if (dialog && typeof dialog.showModal === "function") {
  const image = dialog.querySelector("img");
  const caption = dialog.querySelector("p");
  document.querySelectorAll("[data-image]").forEach((link) => {
    link.setAttribute("aria-haspopup", "dialog");
    link.addEventListener("click", (event) => {
      event.preventDefault();
      image.src = link.dataset.image;
      image.alt = link.dataset.caption;
      caption.textContent = link.dataset.caption;
      dialog.showModal();
    });
  });
  dialog.querySelector(".dialog-close").addEventListener("click", () => dialog.close());
  dialog.addEventListener("click", (event) => {
    const bounds = dialog.getBoundingClientRect();
    if (event.target === dialog && (event.clientX < bounds.left || event.clientX > bounds.right || event.clientY < bounds.top || event.clientY > bounds.bottom)) dialog.close();
  });
}

const enquiry = document.querySelector("#enquiry");
if (enquiry) {
  enquiry.hidden = false;
  const purpose = enquiry.elements.namedItem("purpose");
  const project = enquiry.elements.namedItem("project");
  const note = enquiry.elements.namedItem("note");
  const status = document.querySelector("#enquiry-status");
  const preview = document.querySelector("#enquiry-preview");
  const submit = enquiry.querySelector("button[type=submit]");

  document.querySelectorAll("[data-project], [data-purpose]").forEach((link) => {
    link.addEventListener("click", () => {
      if (link.dataset.project) project.value = link.dataset.project;
      if (link.dataset.purpose) purpose.value = link.dataset.purpose;
      status.textContent = "";
      preview.hidden = true;
    });
  });

  enquiry.addEventListener("input", () => {
    status.textContent = "";
    preview.hidden = true;
  });

  enquiry.addEventListener("submit", async (event) => {
    event.preventDefault();
    const lines = ["Chào chị Lương,", `Nhu cầu: ${purpose.value}.`];
    if (project.value.trim()) lines.push(`Dự án/khu vực: ${project.value.trim()}.`);
    if (note.value.trim()) lines.push(`Thông tin thêm: ${note.value.trim()}`);
    const message = lines.join("\n");
    submit.disabled = true;
    let copied = false;
    try {
      if (navigator.clipboard && navigator.clipboard.writeText) {
        await navigator.clipboard.writeText(message);
        copied = true;
      }
    } catch {
      // A selectable preview handles denied clipboard access without losing the draft.
    }
    preview.value = message;
    preview.hidden = copied;
    status.textContent = copied
      ? "Đã sao chép. Mở Zalo và dán nội dung để trao đổi."
      : "Chọn và sao chép nội dung bên dưới, rồi mở Zalo để trao đổi.";
    submit.disabled = false;
    if (!copied) {
      preview.focus();
      preview.select();
    }
  });
}

// Keep keyboard focus clear of the fixed phone/Zalo bar on mobile.
document.addEventListener("focusin", (event) => {
  const target = event.target;
  if (!(target instanceof HTMLElement) || target.closest(".site-header, .mobile-contact, dialog")) return;
  if (!target.matches(":focus-visible")) return;
  const bar = document.querySelector(".mobile-contact");
  if (!bar || getComputedStyle(bar).display === "none") return;
  const bounds = target.getBoundingClientRect();
  const barBounds = bar.getBoundingClientRect();
  if (bounds.height < innerHeight - 160 && bounds.bottom + 8 > barBounds.top) {
    target.scrollIntoView({ block: "center", behavior: "instant" });
  }
});
