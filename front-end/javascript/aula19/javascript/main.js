import Bingo from "./modules/bingo.js";
import Sheet from "./modules/sheet.js";

const container = document.querySelector("#container");
const btnAddSheet = document.querySelector("#add-sheet");
const result = document.querySelector("#result");
const btnRaffle = document.querySelector("#raffle");
const divRaffledNumber = document.querySelector("#raffled-number");
const divRaffledNumbers = document.querySelector("#raffled-numbers");

const min = 1
const max = 75;
const bingo = Bingo(min, max);
const sheets = [];
const n = 10;
let intervalID;

function drawnSheet(sheet) {
    const sectionSheet = document.createElement("section");
    sectionSheet.classList.add("sheet");
    //adicionando o nome do jogador
    const h3 = document.createElement("h3");
    h3.innerText = sheet.getPlayer();
    h3.classList.add("player");
    h3.classList.add(sheet.getColor());
    sectionSheet.appendChild(h3);
    //criando a cartela
    const sectionNumbers = document.createElement("section");
    sectionNumbers.classList.add("numbers");
    const numbers = sheet.getNumbers();
    for (let i = 0; i < numbers.length; i++) {
        const divNumber = document.createElement("div");
        divNumber.classList.add("unchecked");
        divNumber.classList.add(sheet.getColor());
        divNumber.innerText = sheet.getNumbers()[i].value;
        divNumber.setAttribute("data-value", sheet.getNumbers()[i].value);
        divNumber.setAttribute("data-sheet", sheets.length);
        divNumber.setAttribute("data-index", i);
        divNumber.onclick = checkNumber;
        sectionNumbers.appendChild(divNumber);
    }
    sectionSheet.appendChild(sectionNumbers);
    container.appendChild(sectionSheet);
}

function addSheet() {
    const sheet = Sheet("Jogador " + (sheets.length + 1), bingo.randomNumbers(n));
    drawnSheet(sheet);
    sheets.push(sheet);
}

function victory(sheet) {
    result.innerHTML = `<p>Parabéns <span>${sheet.getPlayer()}</span>!!! Você é o campeão do Bingo</p>`;
    result.style.color = sheet.getColor();
    stop();
}
function checkNumber(event) {
    const target = event.target;
    const value = Number(target.getAttribute("data-value"));
    const sheet = Number(target.getAttribute("data-sheet"));
    const index = Number(target.getAttribute("data-index"));

    // verifica se o numero ja foi sorteado
    if (bingo.isRaffled(value)) {
        //verifica e marca o numero como sorteado
        if (sheets[sheet].checkNumber(index, value)) {
            target.classList.remove("unchecked");
            target.classList.add("checked");
            target.onclick = null;
            if (sheets[sheet].isVictory()) {
                victory(sheets[sheet]);
                //todo: remover o evento de click
            }
        }
    }
}

function raffleNumber() {
    const number = bingo.raffle();
    if (!isNaN(number)) {
        divRaffledNumber.innerText = number;
        divRaffledNumbers.innerHTML += `<span>-</span> <span>${number}</span>`;
    }
}

function start(){
    intervalID = setInterval(raffleNumber, 5000);
    btnRaffle.disabled = true;
    divRaffledNumber.innerText = "?";

}

function stop(){
    clearInterval(intervalID);
    const numbers = document.querySelectorAll(".unchecked");
    for (let i = 0; i < numbers.length; i++) {
        numbers[i].onclick = null;
        numbers[i].style.cursor = "default";
    }
    btnAddSheet.disabled = true;
}

btnAddSheet.onclick = addSheet;
btnRaffle.onclick = start;


