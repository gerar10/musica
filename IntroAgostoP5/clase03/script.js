console.log("hola mundo");

let caja = document.querySelector("#caja");
let check = document.querySelector("#check");

caja.addEventListener("click", () => {
  if (!check.hasAttribute("checked")) {
    check.setAttribute("checked", "checked");
  } else {
    check.removeAttribute("checked");
  }
});


