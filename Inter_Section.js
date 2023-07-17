// თანაკვეთა (ამოიღოს ერთნაირი ელემენტები)

let arr = [0,1,2,3]
let arr2 = [2,3,5,6]
let arrPush = []

for(let index of arr){
if(arr2.includes(index))
 arrPush.push(index)
}
console.log(arrPush);



