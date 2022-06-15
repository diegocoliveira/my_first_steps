const select = document.querySelector("#select");
const img = document.querySelector("#car");
const nome = document.querySelector("#name-car");
const fabricante = document.querySelector("#fabricante");
const potencia = document.querySelector("#potencia");
const tempo = document.querySelector("#tempo");
const velocidade = document.querySelector("#velocidade");

function exibir(e) {
  console.log(e.target.value);
  switch (e.target.value) {
    case "1":
      img.src = "./images/sandero.jpg";
      nome.innerHTML = "Sandero RS 2.0";
      fabricante.innerHTML = "Renault";
      potencia.innerHTML = "150 HP";
      tempo.innerHTML = "8s";
      velocidade.innerHTML = "202 km/h";
      break;
    case "2":
      img.src = "./images/polo.jpg";
      nome.innerHTML = "Polo GTS";
      fabricante.innerHTML = "Volkswagen";
      potencia.innerHTML = "150 HP";
      tempo.innerHTML = "8,4s";
      velocidade.innerHTML = "207 km/h";
      break;
    case "3":
      img.src = "./images/aventador.jpg";
      nome.innerHTML = "Aventador LP 740-4";
      fabricante.innerHTML = "Lamborghini";
      potencia.innerHTML = "740 HP";
      tempo.innerHTML = "2,9s";
      velocidade.innerHTML = "350 km/h";
      break;
    case "4":
      img.src = "./images/ferrari.jpg";
      nome.innerHTML = "812 Superfast";
      fabricante.innerHTML = "Ferrari";
      potencia.innerHTML = "670 HP";
      tempo.innerHTML = "3s";
      velocidade.innerHTML = "330 km/h";
      break;
    default:
      img.src = "";
      nome.innerHTML = "";
      fabricante.innerHTML = "";
      potencia.innerHTML = "";
      tempo.innerHTML = "";
      velocidade.innerHTML = "";
  }

  return true;
}

select.onchange = exibir;
