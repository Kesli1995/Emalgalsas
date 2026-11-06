const menuToggle = document.querySelector(".menu-toggle");
const primaryNav = document.querySelector("#primary-nav");

if (menuToggle && primaryNav) {
  menuToggle.addEventListener("click", () => {
    const isOpen = menuToggle.getAttribute("aria-expanded") === "true";
    menuToggle.setAttribute("aria-expanded", String(!isOpen));
    menuToggle.setAttribute("aria-label", isOpen ? "Abrir menú" : "Cerrar menú");
    primaryNav.classList.toggle("is-open", !isOpen);
  });
}

document.querySelectorAll("[data-year]").forEach((element) => {
  element.textContent = String(new Date().getFullYear());
});

document.querySelectorAll("[data-feedback-form]").forEach((form) => {
  form.addEventListener("submit", (event) => {
    event.preventDefault();
    const message = form.querySelector(".form-message");
    if (message) {
      message.textContent = "Gracias por escribirnos. Esta demostración no envía datos todavía; conecta un servicio de formularios para recibir solicitudes.";
      form.reset();
    }
  });
});

const trackingForm = document.querySelector("[data-tracking-form]");
if (trackingForm) {
  trackingForm.addEventListener("submit", (event) => {
    event.preventDefault();
    const message = trackingForm.parentElement.querySelector(".form-message");
    if (message) {
      message.textContent = "El rastreo estará disponible cuando se conecte el sistema de seguimiento de envíos.";
    }
  });
}
