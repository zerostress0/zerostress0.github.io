// التمرير إلى قسم البداية
function scrollToSection() {
  document.getElementById("services").scrollIntoView({ behavior: "smooth" });
}

// إظهار رسالة ترحيب بسلاسة
window.addEventListener("load", () => {
  const welcome = document.createElement("div");
  welcome.innerHTML = "أهلاً بك في منصة <strong>Zero Stress</strong>!";
  welcome.style.cssText = 
    position: fixed;
    bottom: 20px;
    right: 20px;
    background: #007bff;
    color: white;
    padding: 15px 20px;
    border-radius: 15px;
    font-family: 'Cairo', sans-serif;
    box-shadow: 0 4px 12px rgba(0,0,0,0.2);
    opacity: 0;
    transition: opacity 1s ease;
    z-index: 1000;
  ;
  document.body.appendChild(welcome);
  setTimeout(() => welcome.style.opacity = "1", 500);
  setTimeout(() => welcome.style.opacity = "0", 5000);
  setTimeout(() => document.body.removeChild(welcome), 6000);
});

// تحريك العناصر عند الظهور
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add("show");
    }
  });
});

document.querySelectorAll(".card, .section h2, .about p, form").forEach(el => {
  el.classList.add("hidden");
  observer.observe(el);
});
