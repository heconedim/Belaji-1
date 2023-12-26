const numOfCities = +prompt("Koliko gradova želite posjetiti")
let numOfRoutes = 1;


function PossibleRoutes(numOfCities){
  if(numOfCities <= 0){
    alert("Ne mozes posjetiti 0 ili manje gradova")
  }else{
    for (let i = 1; i <= numOfCities; i++) {
      numOfRoutes *= i;
    }
  }
  console.log("Broj gradova: " + numOfCities);
  console.log("Broj mogucih ruta: " + numOfRoutes);
}

PossibleRoutes(numOfCities);