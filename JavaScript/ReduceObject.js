const cart = [
    {
        title: "Samsung",
        price: 599.99,
        amount: 1
    },
    {
        title: "Pixel",
        price: 499.99,
        amount: 2
    },
    {
        title: "Redmi",
        price: 699.99,
        amount: 4
    },
    {
        title: "Apple",
        price: 399.99,
        amount: 3
    }

]

let total = cart.reduce(
    (total, item) => {
       // console.log(item);
       const {price,amount} = item;
       total.totalItem += amount
       total.cartTotal += amount*price
       
        return total
    }, 
    {
        totalItem: 0,
        cartTotal: 0
    }

)

total.cartTotal = parseFloat(total.cartTotal.toFixed(2))

console.log(total)