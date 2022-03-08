


const buttons = document.querySelectorAll(".circle")
const body = document.querySelector("body")

buttons.forEach(function (buttons){

    buttons.addEventListener("click", function (e) {
        body.style.backgroundColor = e.target.id

});

});
