const result = document.querySelector("#result");
const button = document.querySelector("#button");
result.innerHTML = "";


function gerar() {
    const date = new Date(document.querySelector("#date").value+"T00:00:00");
    result.innerHTML = "<p>"+ date.getDate() +"</p>";
    result.innerHTML += "<p>"+ (date.getMonth()+1) +"</p>";
    result.innerHTML += "<p>"+ date.getFullYear() +"</p>";
    result.innerHTML += "<p>"+ date.getTime() +"</p>";
    switch (date.getDay()) {
        case 0: result.innerHTML += "<p>DOMINGO</p>"; break;
        case 1: result.innerHTML += "<p>SEGUNDA</p>"; break;
        case 2: result.innerHTML += "<p>TERÇA</p>"; break;
        case 3: result.innerHTML += "<p>QUARTA</p>"; break;
        case 4: result.innerHTML += "<p>QUINTA</p>"; break;
        case 5: result.innerHTML += "<p>SEXTA</p>"; break;
        case 6: result.innerHTML += "<p>SÁBADO</p>"; break;
    }
    switch (date.getMonth()) { 
        case 0: result.innerHTML += "<p>JANEIRO</p>"; break;
        case 1: result.innerHTML += "<p>FEVEREIRO</p>"; break;
        case 2: result.innerHTML += "<p>MARÇO</p>"; break;
        case 3: result.innerHTML += "<p>ABRIL</p>"; break;
        case 4: result.innerHTML += "<p>MAIO</p>"; break;
        case 5: result.innerHTML += "<p>JUNHO</p>"; break;
        case 6: result.innerHTML += "<p>JULHO</p>"; break;
        case 7: result.innerHTML += "<p>AGOSTO</p>"; break;
        case 8: result.innerHTML += "<p>SETEMBRO</p>"; break;
        case 9: result.innerHTML += "<p>OUTUBRO</p>"; break;
        case 10: result.innerHTML += "<p>NOVEMBRO</p>"; break;
        case 11: result.innerHTML += "<p>DEZEMBRO</p>"; break;

    }

    return false;
}

button.onclick = gerar;




