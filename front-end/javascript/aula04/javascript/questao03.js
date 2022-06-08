const number = document.querySelector("#number");
const alert = document.querySelector("#alert");
const result = document.querySelector("#result");
alert.style.display = "none";
result.style.display = "none";

function inteiro() {
 
    if(isNaN(number.value)){
        alert.style.display = "block";
        result.style.display = "none";
        
    }else{
        alert.style.display = "none";
        result.style.display = "block";
        document.querySelector("#minor").innerHTML = Math.floor(number.value);
        document.querySelector("#major").innerHTML = Math.ceil(number.value);
        const current = document.querySelectorAll('.current');
        for (let i = 0; i < current.length; i++) {
           current[i].innerHTML = number.value;
        }
        
    }
}

number.onkeyup = inteiro;