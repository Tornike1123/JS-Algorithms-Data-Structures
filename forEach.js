//შეკრიბოს მასივში ყველა ელემენტი


//V1
const number = [1,2,3,4,5]
let sum = 0;

number.forEach(item =>{
    sum += item
})
console.log(sum); // 15

//V2

const arr = ['a','b','c','a','a','c'];
let count = {};

arr.forEach(item2 =>{
    if(count[item2]){
        count[item2]++
    }else{
        count[item2] = 1;
    }
})
console.log(count); // { a: 3, b: 1, c: 2 }