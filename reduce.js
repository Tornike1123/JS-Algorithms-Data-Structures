

//შეკრიბავს ყველა price  და count-
const product = [
    {
      name: 'laptop',
      price: 1000,
      count: 5 , 
    },
    {
      name: 'desk',
      price: 10,
      count: 3 , 
    },
    {
      name: 'phone',
      price: 40,
      count: 2 , 
    },
]

const redd = product.reduce((acc,item)=> acc + item.price + item.count, 0)

console.log(redd);