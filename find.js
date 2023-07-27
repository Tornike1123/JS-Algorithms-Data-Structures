const person = [
    {
        name: 'florin',
        age: 24
    },
    {
        name: 'ivan',
        age: 26
    },
    {
        name: 'liam',
        age: 18
    },
]

const res = person.find(findIvan).age;

function findIvan(pers){
    return pers.name === 'ivan'
}


console.log(res);