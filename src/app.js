window.onload = init;

function init() {
    const button = document.getElementById("run")
    button.addEventListener("click", clicked)
}

function clicked() {
    const paragraph = document.getElementById("output")
    paragraph.innerText = "Clicked!";
}
