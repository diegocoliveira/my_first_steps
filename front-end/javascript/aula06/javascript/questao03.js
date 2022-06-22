const button = document.querySelector("#button");
const select = document.querySelector("#select");
const img = document.querySelector("#img");

function exibir() {

    switch (select.value) {
        case "1": img.src = "./images/celular.jpg"; break;
        case "2": img.src = "./images/cosmeticos.webp"; break;
        case "3": img.src = "./images/game.jpg"; break;
        case "4": img.src = "./images/notebook.jpg"; break;
        case "5": img.src = "./images/roupas.webp"; break;
        default: img.src= ""; break;
    }

  return true
}

button.onclick = exibir;
