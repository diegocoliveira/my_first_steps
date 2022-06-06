const number1 = document.querySelector("#number1");
const number2 = document.querySelector("#number2");
const result = document.querySelector("#result");
const balanca = document.querySelector("#balanca");

document.querySelector("#comparar").onclick = function () {
  let vNumber1 = parseInt(number1.value, 10);
  let vNumber2 = parseInt(number2.value,10);
  
  if (!isNaN(vNumber1) && !isNaN(vNumber2)) {
    if (vNumber1 > vNumber2) {
      result.innerHTML = "O primeiro número é maior";
      number1.className = "gt";
      number2.className = "lt";
      balanca.className = "form-greater-than-number1";
    } else if (vNumber1 < vNumber2) {
      result.innerHTML = "O segundo número é maior";
      number1.className = "lt";
      number2.className = "gt";
      balanca.className = "form-greater-than-number2";
    } else {
      result.innerHTML = "Os números são iguais";
      number1.className = "eq";
      number2.className = "eq";
      balanca.className = "";
    }
  } else {
    result.innerHTML = "Preencha os dois campos";
    number1.className = "init";
    number2.className = "init";
    balanca.className = "";
  }
  return false;
};
