//price * count
//V1
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

//V2
//სტრინგის რიცხვად ამოღება

const str = ["0","1","2"]

const number = str.map(Number)
console.log(number);