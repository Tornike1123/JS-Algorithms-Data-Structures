const arr = [1, [2, [3, [4, [5]]]]]

const res = arr.flat(4)  //დანესტილ არაის ამოიღებს და დატოვებს ერთ არაის. 4 რომ გავუწერეთ მოხსნა 4ცალი არაი

console.log(res);