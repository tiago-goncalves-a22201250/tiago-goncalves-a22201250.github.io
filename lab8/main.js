
//1º exe - Arrow Function
const textoPassa = document.getElementById("passa");

textoPassa.onmouseover = () => {
    textoPassa.textContent = "1. Obrigado por passares!";
}

textoPassa.onmouseleave = () => {
    textoPassa.textContent = "1. Passa por aqui!";
}

//2º exe
const frase = document.getElementById("cor");

document.querySelectorAll('button').forEach(function (button) {
    button.onclick = function () {
        frase.style.color = button.dataset.color;
    }
})

//3º exe
const texto = document.getElementById("txt");

texto.addEventListener("input", function () {

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
document.querySelector('select').onchange = function() {
    document.querySelector('body').style.backgroundColor = this.value;
}

//5º exe
let counter = 0;
const contador = document.querySelector("#contador");
const botao = document.querySelector("#conta");

function count() {
    counter++;
    contador.innerHTML = counter;
}

botao.addEventListener('click', count);


var txtCounter = document.getElementById("contador");

// Se não existe a chave counter em localStorage, inicializamos.
if (!localStorage.getItem('counter')) {
    localStorage.setItem('counter', 0);
}

// Função count() que manipula o valor de counter em localStorage
function count() {
    let counter = parseInt(localStorage.getItem('counter'));
    counter++;
    txtCounter.textContent = counter;
    localStorage.setItem('counter', counter);
}

// Quando a página é carregada, atualizamos o elemento que mostra o valor de counter
txtCounter.textContent = localStorage.getItem('counter');

//6º exe
var nomeTexto = document.getElementById("nomeTexto");
var idadeTexto = document.getElementById("idadeTexto");
var submissao = document.getElementById("nomeBotao");
var textoNomeIdade = document.getElementById("nomeIdade");

document.querySelector('form').onsubmit = (e) => {
    e.preventDefault()
    textoNomeIdade.textContent = "Olá, o " + nomeTexto.value + " tem " + idadeTexto.value;
    return;
};

//7º exe
let contadorAuto = 0;
const span = document.querySelector("span");
function count() {
span.innerHTML = ++counter;
}
setInterval(count, 1000);