const button = document.querySelector("#submit");
const text = document.querySelector("#text");
const result = document.querySelector("#result");
const alert = document.querySelector("#alert");

function converter(e) {
  try{
    alert.innerHTML ="";
    result.innerHTML= "";
    const user = JSON.parse(text.value);
    result.innerHTML+="<p>Parsable JSON string!</p>";
    console.log(user);
  }catch (ex){
    alert.innerHTML = ex;
  }
  return false;
}


button.onclick = converter;