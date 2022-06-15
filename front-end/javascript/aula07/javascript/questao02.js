let value="";

const result = document.querySelector("#result");
const cep = document.querySelector("#cep");

function somenteInteiros(event){
    console.log("Início do evento input");
    
    if(Number.isInteger(parseInt(event.data))){
        value = event.target.value;
    }
    event.target.value = value;
    console.log("Fim do evento input");
}

function tamanho(event){
    value = value.length >1 ? value.replace("-", ""): value;
    console.log("Início do evento keyup");
    value = value.length >8 ? value.substring(0,8) : value;
    value = value.length >5 ? value.substring(0,5) + "-" + value.substring(5) : value;
    event.target.value = value;
    console.log("Fim do evento keyup");
}

function backspace(event){
    console.log("Início do evento keydown");
    const i = cep.selectionStart;
    if(event.key == "Backspace"){
        value = value.substring(0,cep.selectionStart-1) + value.substring(cep.selectionStart); 
    }
    event.target.value = value;
    cep.selectionEnd = i;
    console.log("Início do evento keydown");
}

cep.onkeyup = tamanho;
cep.oninput   = somenteInteiros;
cep.onkeydown = backspace;

