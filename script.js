// =========================================================================
// script.js — interactions du site
// Rien ici ne contient de texte à modifier : le contenu est dans index.html.
// =========================================================================

document.addEventListener("DOMContentLoaded", () => {
  initMobileNav();
  initProjectModals();
  initContactForm();
  setFooterYear();
});

// -------------------------------------------------------------------------
// Menu mobile (icône burger)
// -------------------------------------------------------------------------
function initMobileNav() {
  const toggle = document.getElementById("navToggle");
  const links = document.getElementById("navLinks");
  if (!toggle || !links) return;

  toggle.addEventListener("click", () => {
    const isOpen = links.classList.toggle("active");
    toggle.setAttribute("aria-expanded", String(isOpen));
  });

  // Ferme le menu après clic sur un lien (mobile)
  links.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
      links.classList.remove("active");
      toggle.setAttribute("aria-expanded", "false");
    });
  });
}

// -------------------------------------------------------------------------
// Modales de détail projet
// Chaque carte projet a un bouton [data-project="project-X"] qui ouvre
// la modale #modal-project-X définie dans index.html.
// -------------------------------------------------------------------------
function initProjectModals() {
  const overlay = document.getElementById("modalOverlay");
  if (!overlay) return;

  const openButtons = document.querySelectorAll("[data-project]");
  openButtons.forEach((button) => {
    button.addEventListener("click", () => {
      const modal = document.getElementById(`modal-${button.dataset.project}`);
      if (!modal) return;
      overlay.classList.add("active");
      modal.classList.add("active");
    });
  });

  overlay.addEventListener("click", (event) => {
    if (event.target === overlay || event.target.classList.contains("modal-close")) {
      closeAllModals(overlay);
    }
  });

  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") closeAllModals(overlay);
  });
}

function closeAllModals(overlay) {
  overlay.classList.remove("active");
  overlay.querySelectorAll(".modal").forEach((modal) => modal.classList.remove("active"));
}

// -------------------------------------------------------------------------
// Formulaire de contact (Formspree)
// Envoie le formulaire en AJAX pour afficher un message de confirmation
// sans recharger la page. Nécessite l'URL Formspree configurée dans
// index.html (action="https://formspree.io/f/VOTRE_ID_FORMSPREE").
// -------------------------------------------------------------------------
function initContactForm() {
  const form = document.getElementById("contactForm");
  const note = document.getElementById("formNote");
  if (!form || !note) return;

  form.addEventListener("submit", async (event) => {
    event.preventDefault();
    note.textContent = "Envoi en cours...";

    try {
      const response = await fetch(form.action, {
        method: "POST",
        body: new FormData(form),
        headers: { Accept: "application/json" },
      });

      if (response.ok) {
        note.textContent = "Message envoyé, merci ! Je vous réponds rapidement.";
        form.reset();
      } else {
        note.textContent = "Une erreur est survenue. Réessayez ou écrivez-moi directement par email.";
      }
    } catch (error) {
      note.textContent = "Une erreur est survenue. Réessayez ou écrivez-moi directement par email.";
    }
  });
}

// -------------------------------------------------------------------------
// Année automatique dans le footer
// -------------------------------------------------------------------------
function setFooterYear() {
  const yearEl = document.getElementById("year");
  if (yearEl) yearEl.textContent = new Date().getFullYear();
}
