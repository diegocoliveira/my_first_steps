const result = document.querySelector("#result");
result.innerHTML = "";
obj = {};
obj["um atributo com espaços"]=1;
console.log(obj);
result.innerHTML += `<p>${JSON.stringify(obj)}</p>`;
console.log(obj["um atributo com espaços"]);
result.innerHTML += `<p>${obj["um atributo com espaços"]}</p>`;
obj2 = {};
Object.defineProperty(obj2,"um atributo com espaços",{value:1,  enumerable: true});
console.log(obj2);
result.innerHTML += `<p>${JSON.stringify(obj2)}</p>`;
console.log(obj2["um atributo com espaços"]);
result.innerHTML += `<p>${obj2["um atributo com espaços"]}</p>`;
