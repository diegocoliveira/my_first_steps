
const alert = document.querySelector("#alert");
const result = document.querySelector("#result");
const img = document.querySelector("#img");
const imc = document.querySelector("#imc");
const calculate = document.querySelector("#calculate");
alert.style.display = "none";
result.innerHTML = "";
imc.innerHTML = "";
img.src = "../images/ponto-interrogacao.svg";

function calcularImc() {
    const weight = document.querySelector("#weight").value.replace(",", ".");
    const height = document.querySelector("#height").value.replace(",", ".");

    if (isNaN(weight) || isNaN(height) || weight <= 0 || height <= 0) {
        alert.style.display = "block";
        result.innerHTML = "";
        imc.innerHTML = "";
        img.src = "../images/ponto-interrogacao.svg";

    } else {
        alert.style.display = "none";
        imc.value = (weight / (height * height)).toFixed(2);
        if (imc.value < 18.5) {
            result.innerHTML = "Abaixo do peso";
            img.src = "../images/abaixo-peso.jpg";
        } else if (imc.value >= 18.5 && imc.value <= 24.9) {
            result.innerHTML = "Peso normal";
            img.src = "../images/peso-normal.jpg";
        } else if (imc.value >= 25 && imc.value <= 29.9) {
            result.innerHTML = "Sobrepeso";
            img.src = "../images/sobrepeso.jpg";
        } else if (imc.value >= 30) {
            result.innerHTML = "Obesidade";
            img.src = "../images/obesidade.jpg";
        }

        imc.innerHTML = "IMC = " + imc.value.replace(".", ",");
    }
    return false;
}
calculate.onclick = calcularImc;