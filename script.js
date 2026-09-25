const menuButton = document.querySelector(".menu-button");
const nav = document.querySelector(".primary-nav");

if (menuButton && nav) {
  menuButton.addEventListener("click", () => {
    const open = nav.classList.toggle("open");
    menuButton.setAttribute("aria-expanded", String(open));
  });

  nav.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
      nav.classList.remove("open");
      menuButton.setAttribute("aria-expanded", "false");
    });
  });
}

document.querySelectorAll(".faq-list details").forEach((item) => {
  item.addEventListener("toggle", () => {
    if (!item.open) return;
    document.querySelectorAll(".faq-list details").forEach((other) => {
      if (other !== item) other.open = false;
    });
  });
});

const year = document.getElementById("year");
if (year) year.textContent = new Date().getFullYear();

const demoModal = document.getElementById("demo-modal");
const demoModalCopy = document.getElementById("demo-modal-copy");
let lastFocusedElement = null;

function openDemoModal(message) {
  if (!demoModal) return;
  lastFocusedElement = document.activeElement;
  if (demoModalCopy && message) demoModalCopy.textContent = message;
  demoModal.hidden = false;
  document.body.classList.add("demo-modal-open");
  const closeButton = demoModal.querySelector(".demo-modal-close");
  if (closeButton) closeButton.focus();
}

function closeDemoModal() {
  if (!demoModal) return;
  demoModal.hidden = true;
  document.body.classList.remove("demo-modal-open");
  if (lastFocusedElement && typeof lastFocusedElement.focus === "function") {
    lastFocusedElement.focus();
  }
}

document.querySelectorAll("[data-demo-close]").forEach((button) => {
  button.addEventListener("click", closeDemoModal);
});

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape" && demoModal && !demoModal.hidden) {
    closeDemoModal();
  }
});

document.querySelectorAll(".demo-contact-trigger").forEach((link) => {
  link.addEventListener("click", (event) => {
    event.preventDefault();
    openDemoModal(
      "This is a fictional electrician website, so the call, WhatsApp and email actions are disabled. On a real client website these buttons would connect directly to the business."
    );
  });
});

const form = document.getElementById("quote-form");
const formStatus = document.getElementById("demo-form-status");

if (form) {
  form.addEventListener("submit", (event) => {
    event.preventDefault();

    if (!form.checkValidity()) {
      form.reportValidity();
      return;
    }

    if (formStatus) {
      formStatus.textContent =
        "Demo successful — the form journey works, but no personal details were sent or stored.";
    }

    openDemoModal(
      "You completed the demo enquiry journey successfully. No message was sent and none of the details you entered were submitted anywhere."
    );
  });
}
