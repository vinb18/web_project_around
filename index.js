function hacerClick() {
    console.log("hice click")
}
// DOM
// 1. DOCUMENT OBJECT MODEL

// A. SELECCIÓN
const buttons = document.querySelectorAll(".button")
// buttons[0] => button_edit

const modal = document.querySelector(".popup")
const closeModalBtn = document.querySelector(".button__close")
console.log(closeModalBtn)

// B. MANIPULACIÓN
// I. ACTIVACIÓN DE MODAL PARA EDITAR DE PERFIL
buttons[0].addEventListener("click", doClick)

buttons[0].addEventListener("click", hacerClick)
// II. CERRAR MODAL
closeModalBtn.addEventListener("click", closePopup)

// 2. FUNCIONES DECLARADAS - ACCIONES
function doClick() {
  // 1. SELECCIONAR MODAL. (YA ESTÁ HECHO)
  // 2. ACTIVAR MODAL (CLASE EN CSS .popup) CAMBIANDO EL DISPLAY NONE Aº DISPLAY BLOCK
  modal.style.display = "block"
  return
}

for (let i=0; i < buttons.length; i++){
    console.log(buttons[i]);
}
function closePopup() {
  console.log("cerrando popup")
  // 1. SELECCIONAR MODAL (YA ESTÁ HECHO)
  // 2. DESACTIVAR MODAL (CLASE EN CSS .popup) CAMBIANDO EL DISPLAY DE NONE A BLOCK
  modal.style.display = "none"
}
