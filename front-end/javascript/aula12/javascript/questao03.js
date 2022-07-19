
  function pi(){
    const precision = BigInt(10**30);
    let sum =0n;
    ///let previous = 0n;
    let n=2n;
    let sign = 1n;
    let variation = 10n;
    //let i=0;
    let start = Date.now();
    while(variation> 0n){
      //previous = sum;
      variation =precision/(n*(n+1n)*(n+2n));
      sum += sign*variation
      sign *= -1n;
      n+=2n;
      //variation = previous>=sum?previous-sum:sum-previous;
      //console.log((n*(n+1n)*(n+2n)),previous,sum,variation);
      ///console.log(i,variation);
      //i++;
      
    }
    end = Date.now();
    console.log(`Tempo de execução: ${end - start}ms`);
    sum*=4n;
    console.log(n,"3,"+sum);

  }

  pi();