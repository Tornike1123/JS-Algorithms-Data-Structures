const number = [0,1,2,3,4,5]

const res = number.findIndex(findThree)

function findThree(val) {
    return val === 3
}

console.log(res); // როდესაც იპოვის ველოის აინდექსებს მერამდენეა ნაპოვნი ველიუ