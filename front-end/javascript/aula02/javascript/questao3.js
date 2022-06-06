const day = document.getElementById('day');
const month = document.getElementById('month');
const year = document.getElementById('year');
const result = document.getElementById('result');

const compute = document.querySelector("#compute");
const range = document.querySelector("#range");

function resultado(){
  let sexo = document.querySelector("input[type='radio'][name='gender']:checked").value;
  const date = new Date();
  const dataAtual = date.getFullYear()*365.25 + 30.4375*(date.getMonth()+1) + date.getDate();
  const dataNascimento = year.value*365.25 + 30.4375*(month.value) + day.value;
  console.log(sexo);
  const estimativa = (sexo == "m"?73.1:80.1)  *365.25;
  let dias = parseInt(estimativa-(dataAtual-dataNascimento));
  range.value = dias*100/estimativa;
  result.innerHTML = dias + " dias";
  return false;
}


compute.onclick = resultado;

