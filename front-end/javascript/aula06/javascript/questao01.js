
const bomb = document.querySelector("#bomb");
alert.innerHTML = "";
result.innerHTML = "";
let myTimeout;

let estado = "desarmada";


function acao() {
    switch (estado) {
        case "desarmada": armar(); break;
        case "armada": desarmar(); break;
        case "explodida": desarmar(); break;
    }
}


function armar() {
    console.log("Bomba armada");
    bomb.src = "./images/armed-bomb.gif";
    estado = "armada";
    myTimeout = setTimeout(explodir, 2000);

}

function desarmar() {
    bomb.src = "./images/bomb.png";
    estado = "desarmada";
    clearTimeout(myTimeout);
    console.log("Ufa... Bomba desarmada");
}

function explodir() {
    const audio =   new Audio("../sounds/explosion.mp3");
    audio.play();
    bomb.src = "./images/explosion.gif";
    estado = "explodida";
    console.log("Boom!");
}

bomb.onclick = acao;




