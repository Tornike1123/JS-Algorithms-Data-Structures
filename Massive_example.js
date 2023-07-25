
// The first letter should start with a capital letter and the rest should be lowercase
let arr = ["tOko","GioRgi"]
const arrPush = []

let mm = arr.map((o)=> {
    const m2 = o.slice(0,1).toUpperCase() + (o.slice(1).toLocaleLowerCase())
    arrPush.push(m2)

    
})
console.log(arrPush);