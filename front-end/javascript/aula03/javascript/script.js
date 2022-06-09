const result = document.querySelector('#result');

function calcular(){
    const num1 = document.querySelector('#num1').value.replace(',', '.');
    const num2 = document.querySelector('#num2').value.replace(',', '.');
    const operador = document.querySelector('#operators').value;
    const total = document.querySelector('#total');
    
    if(operador == '+'){
        total.value = parseFloat(num1) + parseFloat(num2);
    }else if(operador == '-'){
        total.value = parseFloat(num1) - parseFloat(num2);
    }else if(operador == '*'){
        total.value = parseFloat(num1) * parseFloat(num2);
    }else if(operador == '/'){
        total.value = parseFloat(num1) / parseFloat(num2);
    }
    total.value = total.value.replace('.', ',');    
    return false;
   
}

result.onclick = calcular;