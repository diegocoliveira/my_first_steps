
const alert = document.querySelector("#alert");
const result = document.querySelector("#result");
const button = document.querySelector("#button");
alert.innerHTML = "";
result.innerHTML = "";


function gerar() {
    const num = parseFloat(document.querySelector("#num").value.replace(",", "."));
    if (Number.isInteger(num) ) {
        alert.innerHTML = "";
        result.innerHTML = "";
        switch (num) {
            case 0: result.innerHTML = "ZERO"; break;
            case 1: result.innerHTML = "UM"; break;
            case 2: result.innerHTML = "DOIS"; break;
            case 3: result.innerHTML = "TRÊS"; break;
            case 4: result.innerHTML = "QUATRO"; break;
            case 5: result.innerHTML = "CINCO"; break;
            case 6: result.innerHTML = "SEIS"; break;
            case 7: result.innerHTML = "SETE"; break;
            case 8: result.innerHTML = "OITO"; break;
            case 9: result.innerHTML = "NOVE"; break;
            case 10: result.innerHTML = "DEZ"; break;
            default: alert.innerHTML = "O número digitado não se encontra entre 0 e 10"; break;
        }

    } else {
        alert.innerHTML = "O valor digitado não é um número inteiro"
        result.innerHTML = "";
    }
    return false;
}

button.onclick = gerar;




