
function primeNumber(n) {
    if(n <2){
        return false;
    }
    for(let i = 2; i < n; i++){
        if(n % i == 0){
            return false;
        }
    }
    return true;
}

function primeNumberPlus(n) {
    if(n <2){
        return false;
    }
    let i = 2;
    let j = n/i;
    while(i <= j){
        if(n % i == 0){
            return false;
        }
        i++;
        j = n/i;
    }
    return true;
}

function test(){
    const n = 100;
    let primes = [];
    let start = Date.now();
    for(i=0; i<=n; i++){
        if(primeNumberPlus(i)){
            primes.push(i);
        }
    }
    let end = Date.now();
    console.log(primes.length, primes);
    console.log(`Tempo de execução: ${end - start}ms`);
    primes = [];
    start = Date.now();
    for(i=0; i<=n; i++){
        if(primeNumber(i)){
            primes.push(i);
        }
    }
    end = Date.now();
    console.log(primes.length, primes);
    console.log(`Tempo de execução: ${end - start}ms`);
}

test();