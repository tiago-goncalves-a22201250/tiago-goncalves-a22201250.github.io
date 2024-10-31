
//1º exe
const textoPassa = document.getElementById("passa");

textoPassa.onmouseover = function () {
    textoPassa.textContent = "1. Obrigado por passares!";
}
textoPassa.onmouseout = function () {
    textoPassa.textContent = "1. Passa por aqui!";
}

//2º exe
const paragrafo = document.getElementById("cor");
const botaoRed = document.getElementById("red");
const botaoGreen = document.getElementById("green");
const botaoBlue = document.getElementById("blue");

botaoRed.onclick = function() {
    paragrafo.style.color = "red";
}

botaoGreen.onclick = function() {
    paragrafo.style.color = "green";
}

botaoBlue.onclick = function() {
    paragrafo.style.color = "blue";
}

//3º exe
const texto = document.getElementById("txt");

texto.addEventListener("input",function() {

    const textLength = txt.value.length;

    if (textLength === 0) {
        txt.style.backgroundColor = "white";
    } else if (textLength % 3 === 1) {
        txt.style.backgroundColor = "cyan";
    } else if (textLength % 3 === 2) {
        txt.style.backgroundColor = "red";
    } else {
        txt.style.backgroundColor = "yellow";
    }
});

//4º exe
const fundo = document.getElementById("txtFundo");

