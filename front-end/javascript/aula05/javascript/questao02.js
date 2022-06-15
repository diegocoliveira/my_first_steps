const result = document.querySelector("#result");
const button = document.querySelector("#button");
result.innerHTML = "";


function gerar() {
    const date = new Date(document.querySelector("#date").value + "T00:00:00");
    result.innerHTML = "<p>Dia: " + date.getDate() + "</p>";
    result.innerHTML += "<p>Mês " + (date.getMonth() + 1) + "</p>";
    result.innerHTML += "<p>Ano: " + date.getFullYear() + "</p>";
    result.innerHTML += "<p>milisegundos: " + date.getTime() + "</p>";
    result.innerHTML += "<p>Dia da Semana: " + diaDaSemana(date.getDay()) + "</p>";
    result.innerHTML += "<p>Mês do Ano: " + mesdoAno(date.getMonth()) + "</p>";
    

    return false;
}

function diaDaSemana(dia) {
    switch (dia) {
       case 0: return "DOMINGO";
       case 1: return "SEGUNDA";
       case 2: return "TERÇA";
       case 3: return "QUARTA";
       case 4: return "QUINTA";
       case 5: return "SEXTA";
       case 6: return "SÁBADO";
    }
}

function mesdoAno(mes){
    switch (mes) {
        case 0: return "JANEIRO";
        case 1: return "FEVEREIRO";
        case 2: return "MARÇO";
        case 3: return "ABRIL";
        case 4: return "MAIO";
        case 5: return "JUNHO";
        case 6: return "JULHO";
        case 7: return "AGOSTO";
        case 8: return "SETEMBRO";
        case 9: return "OUTUBRO";
        case 10: return "NOVEMBRO";
        case 11: return "DEZEMBRO";
    }
}

button.onclick = gerar;




