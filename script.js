const phoneNumber = "5582988904718";

const encodeMessage = (message) => encodeURIComponent(message.trim());

document.querySelectorAll("[data-whatsapp]").forEach((link) => {
  const message =
    link.dataset.message ||
    "Olá, Filipe! Vim pelo site e gostaria de saber mais sobre o acompanhamento nutricional.";

  link.href = `https://wa.me/${phoneNumber}?text=${encodeMessage(message)}`;
  link.target = "_blank";
  link.rel = "noreferrer";
});

const header = document.querySelector("[data-header]");
const floatingWhatsapp = document.querySelector(".floating-whatsapp");

const setHeaderState = () => {
  header?.classList.toggle("is-scrolled", window.scrollY > 12);
  floatingWhatsapp?.classList.toggle("is-visible", window.scrollY > 420);
};

setHeaderState();
window.addEventListener("scroll", setHeaderState, { passive: true });

const revealItems = document.querySelectorAll("[data-reveal]");

if ("IntersectionObserver" in window) {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.14 }
  );

  revealItems.forEach((item) => observer.observe(item));
} else {
  revealItems.forEach((item) => item.classList.add("is-visible"));
}
