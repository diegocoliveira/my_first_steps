/*clientHeigth*/

const number1 = document.querySelector('#number1');
const number2 = document.querySelector('#number2');
const operadors = document.querySelector('#operators');
const button = document.querySelector('#button');
const total = document.querySelector('#total');

function calcular() {
    const inicio = (new Date()).getTime();
    const num1 = number1.value.replace(',', '.');
    const num2 = number2.value.replace(',', '.');
    const operador = operadors.value;
    total.value = "";
    switch (operador) {
        case '+': total.value = somar(num1, num2); break;
        case '-': total.value = subtrair(num1, num2); break;
        case '*': total.value = multiplicar(num1, num2); break;
        case '/': total.value = dividir(num1, num2); break;
        case '**': total.value = exponenciar(num1, num2); break;
        case '%': total.value = resto(num1, num2); break;
    }
    total.value = total.value.replace('.', ',');
    const fim = (new Date()).getTime();
    console.log(`Tempo de execução: ${(fim - inicio) / 1000}s`);
    return true;

}

button.onclick = calcular;

function somar(num1, num2) {
    try {
        if (Number.isInteger(Number(num1)) && Number.isInteger(Number(num2)) && Number(num1) >= 0 && Number(num2) >= 0) {
            return Number(num1) + Number(num2);
        } else {
            throw `[sum] Impossible to sum ${num1} + ${num2}`;
        }
    } catch (error) {
        console.log(error);
        throw `[sum] Impossible to sum ${num1} + ${num2}`;
    }

}

function subtrair(num1, num2) {
    try {
        if (Number.isInteger(Number(num1)) && Number.isInteger(Number(num2)) && Number(num2) >= 0 && Number(num1) >= Number(num2)) {
            return trampoline(sub(Number(num1), Number(num2), 0));
        } else {
            throw `[subtract] Impossible to subtract ${num1} - ${num2}`;
        }

    } catch (error) {
        console.log(error);
        throw `[subtract] Impossible to subtract ${num1} - ${num2}`;
    }


}

const sub = (num1, num2, result) => {
    if (num1 > somar(num2, result)) {
        return () => sub(num1, num2, somar(result, 1));
    } else {
        return result;
    }
}

function multiplicar(num1, num2) {
    try {
        if (Number.isInteger(Number(num2)) && Number(num2) >= 0) {
            return trampoline(multi(Number(num1), Number(num2)));
        } else {
            throw `[multiply] Impossible to multiply ${num1} * ${num2}`;
        }
    } catch (error) {
        console.log(error);
        throw `[multiply] Impossible to multiply ${num1} * ${num2}`;
    }
}

const multi = (num1, num2) => {
    try {
        if (num2 > 0) {
            const result = multi(num1, subtrair(num2, 1));
            return  somar(num1, result);
        } else {
            return 0;
        }

    } catch (error) {
        throw `[multiply] Impossible to multiply ${num1} * ${num2}`;
    }
}

function exponenciar(num1, num2) {
    try {
        if (Number.isInteger(Number(num1)) && Number.isInteger(Number(num2)) && Number(num1) >= 0 && Number(num2) >= 0) {
            return trampoline(exp(Number(num1), Number(num2)));
        } else {
            throw `[exponent] Impossible to exponent ${num1} ** ${num2}`;
        }
    } catch (error) {
        console.log(error);
        throw `[exponent] Impossible to exponent ${num1} ** ${num2}`;
    }
}

const exp = (num1, num2) => {
    try {
        if (num2 > 0) {
            return multiplicar(num1, exp(num1, subtrair(num2, 1)));
        } else {
            return 1;
        }
    } catch (error) {
        throw `[exponent] Impossible to exponent ${num1} ** ${num2}`;
    }
    
}

function dividir(num1, num2) {
    try {
        if (Number.isInteger(Number(num1)) && Number.isInteger(Number(num2)) && Number(num1) >= 0 && Number(num2) >= 0) {
            return trampoline(div(Number(num1), Number(num2), 0));
        } else {
            throw `[divide] Impossible to divide ${num1} / ${num2}`;
        }

    } catch (error) {
        console.log(error);
        throw `[divide] Impossible to divide ${num1} / ${num2}`;
    }
}

const div = (num1, num2, result) => {
    try {
        if (num1 >= num2) {
            return () => div(subtrair(num1, num2), num2, somar(result, 1));
        } else {
            return result;
        }    
    } catch (error) {
        throw `[divide] Impossible to divide ${num1} / ${num2}`;
    }
    
}


function resto(num1, num2) {
    try {
        if (Number.isInteger(Number(num1)) && Number.isInteger(Number(num2)) && Number(num1) >= 0 && Number(num2) >= 0) {
            return trampoline(mod(Number(num1), Number(num2)));
        } else {
            throw `[rest] Impossible to rest ${num1} % ${num2}`;
        }
        
    } catch (error) {
        throw `[rest] Impossible to rest ${num1} % ${num2}`;    
    }
}

const mod = (num1, num2) => {
    try {
        if (num1 >= num2) {
            return () => mod(subtrair(num1, num2), num2);
        } else {
            return num1;
        }
    } catch (error) {
        throw `[rest] Impossible to rest ${num1} % ${num2}`;
    }
}


const trampoline = fn => {
    // faça enquanto for uma função
    while (typeof fn === 'function') {
        // chama a função repetidas vezes
        fn = fn();
    }
    // só retornada quando fn não for uma função!
    return fn;
};