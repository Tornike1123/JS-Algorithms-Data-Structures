// V1
function factorialize(n) {
	if (n === 0 || n === 1) return 1;
	for (let i = n - 1; i >= 1; i--) {
		n *= i;
	}
	return n;
}

console.log(factorialize(4)); // (4*3*2*1) 24

// V2
function factorialize2(x) {
	let result = 1;
	for (let i = 2; i <= x; i++) {
		result *= i;
	}
	return result;
}
console.log(factorialize2(4)); // (1*2*3*4) 24

// V3
function factorialize3(f){
if(f === 0){
	return 1
}else{
	return f * factorialize3(f - 1)
}
}
console.log(factorialize3(4)) //(24)

