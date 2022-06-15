user = {
  "name": "",
  "birthDate" : new Date(),
  "weight" : 0.0,
  "height" : 0,
  "gender" : ""
}

const button = document.querySelector("#submit");
const name = document.querySelector("#name");
const weight  = document.querySelector("#weight");
const height = document.querySelector("#height");
const gender = document.querySelector("#gender");
const day = document.querySelector("#day");
const month = document.querySelector("#month");
const year = document.querySelector("#year");

function enviar(e){
  user.name = name.value;
  user.weight = parseFloat(weight.value.replace(",","."));
  user.height = parseInt(height.value);
  user.gender = gender.value;
  user.birthDate = parseDate(year.value, month.value, day.value);
  console.log(user);
  return false;
}

function parseDate(year, month, day){
    date = new Date (year, month-1, day);
    if(date.getFullYear() == year && date.getMonth() == month-1 && date.getDate() == day){
      const dataAtual = new Date();
      if(date < dataAtual){
        return date;
      }else{
        console.log("Data superior a data atual");
        return null;
      }
    }else{
      console.log("Data inválida");
      return null;
    }
}

button.onclick = enviar;