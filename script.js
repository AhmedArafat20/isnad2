// Mobile Navigation
const menuToggle = document.getElementById("menuToggle");
const mainNav = document.getElementById("mainNav");

menuToggle.addEventListener("click", () => {
  const isOpen = mainNav.classList.toggle("open");

  menuToggle.setAttribute("aria-expanded", String(isOpen));
  menuToggle.textContent = isOpen ? "×" : "☰";
});

// Close menu after clicking a link
mainNav.querySelectorAll("a").forEach(link => {
  link.addEventListener("click", () => {
    mainNav.classList.remove("open");

    menuToggle.setAttribute("aria-expanded", "false");
    menuToggle.textContent = "☰";
  });
});

// Automatic Copyright Year
document.getElementById("year").textContent =
  new Date().getFullYear();

// Back To Top Button
const backTop = document.getElementById("backTop");

window.addEventListener("scroll", () => {
  if (window.scrollY > 450) {
    backTop.classList.add("show");
  } else {
    backTop.classList.remove("show");
  }
});

backTop.addEventListener("click", () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });
});

// WhatsApp Contact Form
document.getElementById("contactForm").addEventListener("submit", event => {
  event.preventDefault();

  const data = new FormData(event.currentTarget);

  const name = data.get("name");
  const city = data.get("city");
  const project = data.get("project");
  const message = data.get("message") || "لا توجد تفاصيل إضافية";

  const whatsappMessage =
    `السلام عليكم، أرغب في الاستفسار عن خدمات إسناد للمطابخ.

الاسم: ${name}
المدينة: ${city}
نوع المشروع: ${project}
التفاصيل: ${message}`;

  const whatsappURL =
    `https://wa.me/966530335785?text=${encodeURIComponent(whatsappMessage)}`;

  window.open(whatsappURL, "_blank", "noopener");
});