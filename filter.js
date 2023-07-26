//V1

const number = [1,2,3,4,5,6,1]
const fil = number.filter(num => num === 1)
console.log(fil);

//V2
const people = [
    {
        name: 'toko',
        age: '28'
    },
    {
        name: 'jorj',
        age: '18'
    },
    {
        name: 'smith',
        age: '15'
    },
]

const filt = people.filter(person => person.age >= 18);

console.log(filt);