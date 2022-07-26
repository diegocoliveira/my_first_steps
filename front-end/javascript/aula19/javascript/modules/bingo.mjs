export default function Bingo(min, max) {

    const numbers = randomNumbers(max-min+1);
    const raffledNumbers = [];

    function randomNumbers(n){
        const sequence = [];
        for(let i = min; i <= max; i++){
            const number = {
                value: i,
                random: Math.random()
            }
            sequence.push(number);
        }
        sequence.sort((a, b) => a.random - b.random);

        const randomNumbers = [];
        for(let i = 0; i < n; i++){
            randomNumbers.push(sequence[i].value);
        }
        
        return randomNumbers;
    }

    function isRaffled(number){
        return raffledNumbers.includes(number);
    }

    function raffle(){
        const number = numbers.pop();
        raffledNumbers.push(number);
        return number;
    }

    return {randomNumbers, isRaffled, raffle};
}