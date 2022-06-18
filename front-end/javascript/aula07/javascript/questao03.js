

const result = document.querySelector("#result");
const chat = document.querySelector("#chat");
const button = document.querySelector("#enviar");
const input = document.querySelector("#input");
chat.value="";

function enviar(){
    chat.value+= input.value+"\n";
    chat.scrollTop = chat.scrollHeight;
    input.value="";
    input.focus();
}

function enter(event){
    if(event.key == "Enter"){
        enviar();
    }
    
}

input.onkeyup = enter;
button.onclick = enviar;


