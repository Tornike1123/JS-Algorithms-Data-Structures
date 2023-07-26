//price * count

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

const prod = product.map((item)=> item.price * item.count);

console.log(prod);