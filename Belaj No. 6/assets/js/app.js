const drinks= [
    {name: "Mojito", price:20},
    {name: "Coke", price:2},
    {name: "Hot Chocolate", price:5},
    {name: "Wine", price:150}
];
  

const sort_by = (field, reverse, primer) => {

    const key = primer ?
      function(x) {
        return primer(x[field])
      } :
      function(x) {
        return x[field]
      };
  
    reverse = !reverse ? 1 : -1;
  
    return function(a, b) {
      return a = key(a), b = key(b), reverse * ((a > b) - (b > a));
    }
  }

console.log(drinks.sort(sort_by('price', false, parseInt)));
