function factorial(num) {
    let fact=1;
    for(let i=1;i<=num;i++){
        fact=fact*i;
    }
    return fact;
}
let num =5;
let result =factorial(num);
console.log("Number:", num);
console.log("Factorial:", result);