      /* открыть и закрыть бургер */
const x = document.getElementById("contain");

x.addEventListener("click", myFunction);

function myFunction() {
  const element = document.getElementById("nav");
  element.classList.toggle("open");
  
  x.classList.toggle("change");
}