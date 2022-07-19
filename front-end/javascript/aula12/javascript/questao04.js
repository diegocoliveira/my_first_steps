
const alert = document.querySelector("#alert");
const result = document.querySelector("#result");
const button = document.querySelector("#button");
alert.innerHTML = "";
result.innerHTML = "";

let deck = [];
let myCards = [];

function execute() {
    if (button.innerHTML == "Criar Baralho") {
        deckNew();
        button.innerHTML = "Embaralhar";

    } else if (button.innerHTML == "Embaralhar") {
        deckNew();
        deckShuffle();
        button.innerHTML = "Comprar Cartas";
    } else if (button.innerHTML == "Comprar Cartas") {
        deckBuy();
        if (myCards.length >= 5) {
            button.innerHTML = "Resultado";
        }
        //button.innerHTML = "Jogar Cartas";
    }else if(button.innerHTML == "Resultado"){
        end();
        button.innerHTML = "Embaralhar";
    }

    return false;
}

function deckNew() {
    alert.innerHTML = "";
    deck = [];
    let card = {};
    for (let i = 2; i <= 14; i++) {
        card = {};
        card.value = i;
        card.suit = "S"; //Spades
        deck.push(card);
        card = {};
        card.value = i;
        card.suit = "H"; //Hearts
        deck.push(card);
        card = {};
        card.value = i;
        card.suit = "D"; //Diamonds
        deck.push(card);
        card = {};
        card.value = i;
        card.suit = "C"; //Clubs
        deck.push(card);
    }
    console.log(deck);
}

function deckShuffle() {

    function compare(a, b) {
        if (a.order < b.order)
            return -1;
        if (a.order > b.order)
            return 1;
        return 0;
    }

    for (card of deck) {
        card.order = Math.random();
    }

    deck.sort(compare);
    myCards = [];
    showMyCards();
 
}

function deckBuy() {
    if (deck.length > 0) {
        myCards.push(deck.pop());
        showMyCards();
    } else {
        alert.innerHTML = "Baralho Vazio";
    }
}

function showMyCards() {
    result.innerHTML = "";
    for (card of myCards) {
        result.innerHTML += `<img class="card" src="./images/${card.value}${card.suit}.svg" alt="${card.value}${card.suit}"> </img>`;
    }
}

function end() {
    function compare(a, b) {
        if (a.value < b.value)
            return -1;
        if (a.value > b.value)
            return 1;
        if (a.suit < b.suit)
            return -1;
        if (a.suit > b.suit)
            return 1;
        return 0;
    }

    alert.innerHTML = "";
   // myCards = [ {"value":3,"suit":"D"}, {"value":3,"suit":"S"}, {"value":7,"suit":"C"}, {"value":8,"suit":"S"}, {"value":9,"suit":"D"}];
    myCards.sort(compare);
    showMyCards();

    if(myCards[0].value == 10 && hasStraight() && hasFlush()){
        alert.innerHTML = "Você tem um Royal Straight Flush";
        return;
    }

    if(hasStraight() && hasFlush()){
        alert.innerHTML = "Você tem um Straight Flush";
        return;
    }

    if(hasFour()){
        alert.innerHTML = "Você tem uma Quadra!";
        return;
    }

    if(hasOnePair() && hasTrinca()){
        alert.innerHTML = "Você tem um Full House!";
        return;
    }
        

    if(hasFlush()){
        alert.innerHTML = "Você tem um Flush";
        return;
    }
    if(hasStraight()){
        alert.innerHTML = "Você tem uma Sequência";
        return;
    }

    if(hasTrinca()){
        alert.innerHTML = "Você tem uma trinca";
        return;
    }

    if(hasTwoPairs()){
        alert.innerHTML = "Você tem dois pares";
        return;
    }

    if(hasOnePair()){   
        alert.innerHTML = "Você tem um par!";
        return;
    }
    alert.innerHTML = "Você tem nada!";

}

function hasOnePair() {
    let pair = 0;
    let cont =1;
    for (let i = 0; i < myCards.length - 1; i++) {
        if (myCards[i].value == myCards[i + 1].value) {
            cont++;
        }else{
            if(cont == 2){
                pair ++;
            }
            cont = 1;
        }
    }
    if(cont == 2){
        pair ++;
    }
    return pair==1?true:false;
}

function hasTwoPairs() {
    let pair = 0;
    let cont =1;
    for (let i = 0; i < myCards.length - 1; i++) {
        if (myCards[i].value == myCards[i + 1].value) {
            cont++;
        }else{
            if(cont == 2){
                pair ++;
            }
            cont = 1;
        }
    }
    if(cont == 2){
        pair ++;
    }
    return pair==2?true:false;
}

function hasTrinca(){
    let trinca = 0;
    let cont =1;
    for (let i = 0; i < myCards.length - 1; i++) {
        if (myCards[i].value == myCards[i + 1].value) {
            cont++;
        }else{
            if(cont == 3){
                trinca ++;
            }
            cont = 1;
        }
    }
    if(cont == 3){
        trinca ++;
    }
    return trinca==1?true:false;
}

function hasStraight(){
    if(myCards[0].value == 2 && myCards[1].value == 3 && myCards[2].value == 4 && myCards[3].value == 5 && myCards[4].value == 14){
        return true;
    }

    for(let i = 0; i < myCards.length - 1; i++){
        if((myCards[i].value + 1) != myCards[i+1].value){
            return false;
        }
    }
    return true;
}

function hasFlush(){
    for(let i = 0; i < myCards.length - 1; i++){
        if(myCards[i].suit != myCards[i+1].suit){
            return false;
        }
    }
    return true;
}
/** */
function hasFour(){
    let four = 0;
    let cont =1;
    for (let i = 0; i < myCards.length - 1; i++) {
        if (myCards[i].value == myCards[i + 1].value) {
            cont++;
        }else{
            if(cont == 4){
                four++;
            }
            cont = 1;
        }
    }
    if(cont == 4){
        four++;
    }
    return four==1?true:false;
}

button.onclick = execute;




