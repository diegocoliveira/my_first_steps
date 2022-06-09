
const alert = document.querySelector("#alert");
const result = document.querySelector("#result");
const sort = document.querySelector("#sort");
alert.innerHTML = "";
result.innerHTML = "";


function sortear() {
    const min = parseFloat(document.querySelector("#min").value.replace(",", "."));
    const max = parseFloat(document.querySelector("#max").value.replace(",", "."));
    if (Number.isInteger(min) && Number.isInteger(max)) {
        if (min < max) {
            alert.innerHTML = "";
            const num = Math.floor(Math.random() * (max - min + 1) + min);
            result.innerHTML = "O valor sorteador é = " + num;
        } else {
            alert.innerHTML = "O valor mínimo não pode ser maior que o valor máximo."
            result.innerHTML = "";
        }
    } else {
        alert.innerHTML = "O valor digitado não é um número inteiro."
        result.innerHTML = "";
    }
    return false;
}

sort.onclick = sortear;




