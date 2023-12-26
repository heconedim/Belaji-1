const cart =[
    {title: "Book" , quantity: 3 , price: 20 },
    {title: "TV" , quantity: 1 , price: 820 },
    {title: "Bread" , quantity: 1 , price: 2 },
    {title: "T-shirt" , quantity: 5 , price: 10 },
    {title: "Socks" , quantity: 7 , price: 4 }
]


function getQuantityOfCartItems(cart){
    const totalPrice = cart.reduce((currentQuantity, item) => {
        return currentQuantity + item.quantity
    }, 0)
    console.log(totalPrice);
}

getQuantityOfCartItems(cart)