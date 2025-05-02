document.addEventListener("DOMContentLoaded", () => {
  const searchBar = document.getElementById("searchBar");

  searchBar.addEventListener("input", function () {
    const query = this.value.toLowerCase();
    const sections = document.querySelectorAll("section");

    sections.forEach((sec) => {
      if (sec.innerText.toLowerCase().includes(query)) {
        sec.style.display = "block";
      } else {
        sec.style.display = "none";
      }
    });
  });
});
