function hacerClick() {
    console.log("hice click")
}

const buttons = document.querySelectorAll(".button")

buttons[0].addEventListener("click", hacerClick)

for (let i=0; i < buttons.length; i++){
    console.log(buttons[i]);
}