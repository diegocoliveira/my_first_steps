const number = document.querySelector("#number");
const alert = document.querySelector("#alert");
const result = document.querySelector("#result");
alert.style.display = "none";
result.style.display = "none";

function inteiro() {
    const num = number.value.replace(",",".");
    if(isNaN(num)){
        alert.style.display = "block";
        result.style.display = "none";
        
    }else{
        alert.style.display = "none";
        result.style.display = "block";
        document.querySelector("#minor").innerHTML = Math.floor(num);
        document.querySelector("#major").innerHTML = Math.ceil(num);
        const current = document.querySelectorAll('.current');
        for (let i = 0; i < current.length; i++) {
           current[i].innerHTML = num.replace(".",",");
        }
        
    }
}

number.onkeyup = inteiro;