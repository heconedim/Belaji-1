const numbers = [1, 2, 3, 4, 5, 6, 7]
const numbers1 = [1, 2, 3, 4, 5, 6, 7]
const numbers2 = [1, 2, 3, 4, 5, 6, 17]


function checkForNumber(numbers, number){
  let check = 0;
  for (let i = 0; i < numbers.length; i++) {
    if (numbers[i].toString().includes(number.toString())) {
      console.log("Boom!");
      check = 1;
    }
  }
  if(check == 0){
    console.log("None of the items contain " + number  + " within them.");
  }
}
checkForNumber(numbers, 9)
checkForNumber(numbers1, 7)
checkForNumber(numbers2, 1)