let colors = ["red", "blue", "purple", "green", "teal", "pink", "salmon", "orange", "gray", "plum"];

export default function Sheet(_player, _numbers) {
    const player = _player;
    const color = randomColor();
    const numbers = [];

    function createSheet(){
        _numbers.sort((a, b) => a - b);
        for(let i = 0; i < _numbers.length; i++){
            const number ={
                value: _numbers[i],
                checked: false
            }
            numbers.push(number);
        }
    }

    function randomColor(){
        if(colors.length === 0){
            colors = ["red", "blue", "purple", "green", "teal", "pink", "salmon", "orange", "gray", "plum"];
        }
        const random = Math.floor(Math.random() * colors.length);
        const color = colors[random];
        colors.splice(random, 1);
        return color;
    }

    function checkNumber(index, value){
        if(numbers[index].value === value){
            numbers[index].checked = true;
            return true;
        }
        return false;
    }

    function isVictory(){
        for(let i = 0; i < numbers.length; i++){
            if(!numbers[i].checked){
                return false;
            }
        }
        return true;
    }

    function getNumbers(){
        return numbers;
    }

    function getPlayer(){
        return player;
    }

    function getColor(){
        return color;
    }

    createSheet();

    return {checkNumber, isVictory, getPlayer, getColor, getNumbers};
}