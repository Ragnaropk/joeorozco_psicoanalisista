const CONTACT_PHONE = "+5214491125755";

const form = document.querySelector("#contactForm");
const note = document.querySelector("#formNote");

form?.addEventListener("submit", (event) => {
  event.preventDefault();

  const data = new FormData(form);
  const name = String(data.get("name") || "").trim();
  const therapy = String(data.get("therapy") || "").trim();
  const message = String(data.get("message") || "").trim();

  const lines = [
    `Hola, mi nombre es ${name}.`,
    `Busco información sobre: ${therapy}.`,
    message ? `Mensaje: ${message}` : "",
    "Me gustaría conocer horarios disponibles para una primera sesión presencial."
  ].filter(Boolean);

  const text = encodeURIComponent(lines.join("\n"));
  const phone = CONTACT_PHONE.replace(/\D/g, "");
  const url = phone ? `https://wa.me/${phone}?text=${text}` : `https://wa.me/?text=${text}`;

  note.textContent = "Se abrió WhatsApp con tu mensaje preparado.";
  window.open(url, "_blank", "noopener,noreferrer");
});
