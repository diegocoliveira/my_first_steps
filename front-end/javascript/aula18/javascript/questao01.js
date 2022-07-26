const alert = document.querySelector("#alert");
const deckInput = document.querySelector("#deck");
const remainingSpan = document.querySelector("#remaining");
const cardsDiv = document.querySelector("#cards");
const shuffleButton = document.querySelector("#shuffle");
const drawSyncButton = document.querySelector("#drawSync");
const drawAsyncButton = document.querySelector("#drawAsync");


/** modulo DECk */
async function getDeck() {
    console.log("Iniciando getDeck...");
    const response = await fetch(`https://deckofcardsapi.com/api/deck/new/shuffle/?deck_count=1`);
    if (!response.ok || response.status !== 200) {
        throw new Error("Failed to Request Data: " + response.status + " - " +response.statusText);
    }
    const data = await response.json();
    if(data.success == false){
        throw new Error(data.error);
    }
    const deck = {
        id: data.deck_id,
        remaining: data.remaining
    };
    console.log("GetDeck Finalizado");
    return deck;
}

async function reshuffle(deckid){
        console.log("Iniciando reshuffle...");
        const response = await fetch(`https://deckofcardsapi.com/api/deck/${deckid}/shuffle/`);
        if (!response.ok || response.status !== 200) {
             throw new Error("Failed to Request Data: " + response.status + " - " +response.statusText);
        }
        const data = await response.json();
        if(data.success == false){
            throw new Error(data.error);
        }
        const deck = {
            id: data.deck_id,
            remaining: data.remaining
        };
        console.log("reshuffle Finalizado");
        return deck;
}

async function shuffle() {
    console.log("Criando ou Embaralhando deck...");
    try {
        cardsDiv.innerHTML = "";
        alert.innerHTML = "";
        let deck = "";
        if (deckInput.value == "") {
            deck = await getDeck();
        }else{
            deck = await reshuffle(deckInput.value);
        }
        deckInput.value = deck.id;
        remainingSpan.innerHTML = deck.remaining;
    } catch (error) {
        console.log(error);
        alert.innerHTML = "Erro ao criar ou embaralhar o deck: " + error;
    } finally {
        console.log("Deck Embaralhado");
    }
    return false;
}

/* Módulo Cartas*/

function delay(n){
    return new Promise(function(resolve){
        setTimeout(resolve,n*1000);
    });
}

async function getCard(deckId, i) {
    console.log(`retirando carta ${i}...`);
    const response = await fetch(`https://deckofcardsapi.com/api/deck/${deckId}/draw/?count=1`);
    if (!response.ok || response.status !== 200) {
        throw new  Error("Failed to Request Data: " + response.status + " - " +response.statusText);
    }
    const data = await response.json();
    if(data.success == false){
        throw new Error(data.error);
    }
    const card = { i: i,
        remaining: data.remaining,
        value: data.cards[0].code,
        image: data.cards[0].images.png
    };
    console.log(`Carta ${i} retirada`);
    return card;
}

function listCards(cards){
    let remaining = cards[0].remaining;
    for(let i = 0; i < cards.length; i++){
        const card = cards[i];
        const img = document.createElement("img");
        img.src = card.image;
        cardsDiv.appendChild(img);
        if(remaining > card.remaining){
            remaining = card.remaining;
        }
    }
    remainingSpan.innerHTML = remaining;
}

async function drawCardsSynchronous() {
    try {
        console.log("Iniciando drawCardsSynchronous...");
        cardsDiv.innerHTML = "";
        alert.innerHTML = "";
        const cards = [];
        for (let i = 0; i < 5; i++) {
            const card = await getCard(deckInput.value, i+1);
            cards.push(card);
        }
        console.log(cards);
        listCards(cards);
    } catch (error) {
        console.log(error);
        alert.innerHTML = "Erro ao retirar cartas: " + error;
    }finally{
        console.log("drawCardsSynchronous Finalizado");
    }
    return false;
}

async function drawCardsAsynchronous() {
    try {
        console.log("Iniciando drawCardsAsynchronous...");
        cardsDiv.innerHTML = "";
        alert.innerHTML = "";
        let cards = [];
        for (let i = 0; i < 5; i++) {
            const card =  getCard(deckInput.value, i+1);
            cards.push(card);
           // await delay(0.1); // Não Faça isso (Kenji)
        }
        cards = await Promise.all(cards);
        console.log(cards);
        listCards(cards);
    } catch (error) {
        console.log(error);
        alert.innerHTML = "Erro ao retirar cartas: " + error;
    }finally{
        console.log("drawCardsAsynchronous Finalizado");
    }
    return false;
}

shuffleButton.onclick = shuffle;
drawSyncButton.onclick = drawCardsSynchronous;
drawAsyncButton.onclick = drawCardsAsynchronous;
