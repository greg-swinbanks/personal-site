document.addEventListener("DOMContentLoaded", () => {
  addYearToFooter();
});

function addYearToFooter() {
  const currentYear = new Date().getFullYear();
  const yearSpan = document.querySelector("footer span#year");
  yearSpan.textContent = currentYear;
}
