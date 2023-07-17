
//0 ის ამოღება და ბოლოში გადატანა

let arr = [1,0,2,0,4,5,6,0,2]
let arrr = []
let arrr2 = []



arrr = arr.filter(el => el === 0)
arrr2 = arr.filter(el => el !== 0)

let resp = [...arrr2, ...arrr]

console.log(resp);