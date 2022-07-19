
const alert = document.querySelector("#alert");
const result = document.querySelector("#result");
const button = document.querySelector("#button");
const num = document.querySelector("#num");
alert.innerHTML = "";
result.innerHTML = "";


function execute() {
    let n = num.value.replaceAll(",", "").replaceAll(".", "").replaceAll(" ", "");
    result.innerHTML = "";
    if (isNaN(n)== false) {
        n = BigInt(n);
        alert.innerHTML = "";
        let start = Date.now();
        let fat = fatorial(n);
        let precision = 10n**BigInt(fat.toString().length+1);
        let e = euler(precision, n);
        result.innerHTML += `<p>${n}!=${fat}</p>`;
        result.innerHTML += `<p>e=${e}</p>`;
        let end = Date.now();
        console.log(`Tempo de execução: ${end - start}ms`);

    } else {
        alert.innerHTML = "O valor digitado não é um número inteiro"
        result.innerHTML = "";
    }
    return false;
}

function fatorial(n){
    let fat = 1n;
    for(let i = 1n; i <= n; i++){
        fat *= i;
    }
    return fat;
}

function euler(precision, n){
    let e = 0n;
    let fat = 1n;
    for(let i = 2n; i <= n; i++){
        fat *= i;
        e += precision/fat;
    }
    return "2,"+e;
}

button.onclick = execute;




