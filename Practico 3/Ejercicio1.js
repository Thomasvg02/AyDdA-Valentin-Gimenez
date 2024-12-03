//Algoritmo para calcular N!
var prompt = require('prompt-sync')();
function factorial(n){
    if(n<0){
        return 0;
    }else if(n==0){
        return 1;
    }else{
        return n*factorial(n-1);
    }
}
let x=parseInt(prompt("Ingrese un numero: "));
console.log("El factorial de " +x+ " es: " + factorial(x)); // 120