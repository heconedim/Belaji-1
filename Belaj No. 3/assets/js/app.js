const numbers = [1, 2, 543, 3, 34, 44, 66]
let biggestNumber = numbers [0]

function findBiggestNumber(numbers){
    for (let i = 1; i < numbers.length; i++) {
        if(biggestNumber<numbers[i]){
            biggestNumber = numbers[i]
        }else continue
    }
    console.log(biggestNumber);
}

findBiggestNumber(numbers);