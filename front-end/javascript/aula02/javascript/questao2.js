const string1 = document.querySelector("#string1");
const range1Value = document.querySelector("#range1Value");
const range1 = document.querySelector("#range1");

const string2 = document.querySelector("#string2");
const range2Value = document.querySelector("#range2Value");
const range2 = document.querySelector("#range2");

const item1 = document.querySelector("#item1");
const item2 = document.querySelector("#item2");
const result = document.querySelector("#result");

const compare = document.querySelector("#compare");

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

function comparar(){
  item1.innerHTML = "'"+string1.value+"'";
  item2.innerHTML = "'"+string2.value+"'";

  if(string1.value.length > string2.value.length){
    result.innerHTML= " é maior que ";
  }else if(string1.value.length < string2.value.length){
    result.innerHTML= " é menor que ";
  }else{
    result.innerHTML= " é do mesmo tamanho que ";
  }

  return false;
}

string1.onkeyup = tamanhoString;
string2.onkeyup = tamanhoString;
compare.onclick = comparar;

