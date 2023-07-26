
//V1
const numb = [2, 10, 1, 20, 40, 45]

const res = numb.sort((a,b)=> a - b)

console.log(res);

//V2

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

product.sort((a, b)=>{
    return a.price - b.price
})
console.log(product);