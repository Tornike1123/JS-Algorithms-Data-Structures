// გვაქვს შემომავალი 100 რიცხვი, თუ იყოფა 3 ზე გამოიტანოს ფიზი, თუ იყოფ 5 ზე გამოიტანოს ბიზი და თუ იყოდა 3ზე და 5ზე გამოიტანოს ფიზბიზი

for(let i = 1; i <= 100; i++){
if(i % 3 === 0 && i % 5 === 0){
    console.log("fizbbuzz");
} else if ( i % 5 === 0){
    console.log("bisi");
} else if(i % 3 === 0){
console.log("fizz");
}else{
    console.log(i);
}
}