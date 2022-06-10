const sort = document.querySelector("#sort");
const result = document.querySelector("#result");

function sortear() {
  const sexo = Math.random() > 0.517 ? "masculino" : "feminino";
  const idoso = Math.random() <= 0.167 ? true : false;

  if (sexo == "masculino") {
    if (idoso) {
      result.className = "homem-idoso";
    } else {
      result.className = "homem";
    }
  } else {
      if(idoso){
        result.className = "mulher-idosa";
      }else{
        result.className = "mulher";
      }
  }
  console.log(result.className); 
  return true;
}

sort.onclick = sortear;
