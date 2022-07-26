user = {
  "name": "",
  "birthDate": new Date(),
  "weight": 0.0,
  "height": 0,
  "gender": ""
}

const button = document.querySelector("#submit");
const name = document.querySelector("#name");
const weight = document.querySelector("#weight");
const height = document.querySelector("#height");
const gender = document.querySelector("#gender");
const day = document.querySelector("#day");
const month = document.querySelector("#month");
const year = document.querySelector("#year");

function enviar(e) {
  user.name = validarName(name.value);
  user.weight = validarWeight(weight.value);
  user.height = validarHeight(height.value);
  user.gender = validarGender(gender.value);
  user.birthDate = validarDate(year.value, month.value, day.value);
  console.log(user);
  return false;
}

function validarName(name) {
  if (name.length >= 5) {
    return name;
  }
  throw "Field “name” is invalid!";
}

function validarDate(year, month, day) {
  const dataAtual = new Date();
  date = new Date(year, month - 1, day);
  if (date.getFullYear() == year && date.getMonth() == month - 1 && date.getDate() == day && (date < dataAtual)) {
    return date;
  } 
  throw "Field “birthDate” is invalid!";
}

function validarWeight(weight) {
  if (isNaN(weight.replace(",", ".")) === false) {
    return parseFloat(weight);
  }
  throw "Field “weight” is invalid!";
}

function validarHeight(height) {
  value = parseFloat(height.replace(",", ".")-0);
  if (Number.isInteger(value) == true) {
   
    return value;
  }
  throw "Field “height” is invalid!";
}

function validarGender(gender){
  if(["masculino", "feminino"].includes(gender)){
    return gender;
  }
  throw "Field “gender” is invalid!";
}

button.onclick = enviar;