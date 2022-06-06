const string1 = document.querySelector("#string1");
const range1Value = document.querySelector("#range1Value");
const range1 = document.querySelector("#range1");

const string2 = document.querySelector("#string2");
const range2Value = document.querySelector("#range2Value");
const range2 = document.querySelector("#range2");

let max = 10;
function tamanhoString(){
  range1Value.innerHTML = string1.value.length;
  range1.value = rangeValue(string1.value.length);

  range2Value.innerHTML = string2.value.length;
  range2.value = rangeValue(string2.value.length);
 
}


function rangeValue(tamanho){
  max = string1.value.length > 10 ? string1.value.length : 10;
  max = string2.value.length > max ? string2.value.length : max;

  return tamanho*100/max;
}

string1.onkeyup = tamanhoString;
string2.onkeyup = tamanhoString;

