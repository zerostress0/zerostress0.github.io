function scrollToSection() {
  document.getElementById("start").scrollIntoView({ behavior: "smooth" });
}
function scrollToSection() {
  document.getElementById("start").scrollIntoView({ behavior: "smooth" });
}

// إشعار ترحيبي
window.addEventListener("load", () => {
  const banner = document.getElementById("welcome-banner");
  banner.classList.add("show");

  // يغلق تلقائيًا بعد 5 ثواني
  setTimeout(() => {
    banner.classList.remove("show");
  }, 5000);

  // زر إغلاق يدوي
  document.getElementById("close-btn").onclick = () => {
    banner.classList.remove("show");
  };
});
