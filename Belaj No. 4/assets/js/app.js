const items = [
    {name: "Lopta", color: "red"},
    {name: "Stol", color: "blue"},
    {name: "Daska", color: "blue"},
    {name: "Pernica", color: "white"}
];

function filterBlueItems(items){
    const filteredItems = items.filter((item) => item.color == "blue")
    console.log(filteredItems);
}

filterBlueItems(items);