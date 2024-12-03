//Algoritmo para determinar la raiz cuadrada y el Piso de una raiz cuadrada de un numero n ingresado por el usuario
var prompt = require('prompt-sync')();

function calculoRaizCuadrada(n){
    let y;
    y=n;
    let i;
    i=0;
    while (1){
        i++;
        y= (y+(n/y))/2;
        if(i>200){
            return y;
        }
        if (y*y<=n){
            return y;
        }
    }
}
function calculoPisoRaizCuadrada(n){
    let y;
   y=calculoRaizCuadrada(n);
   y=y-(y % 1);
    return y;
}
let x=parseFloat(prompt("Ingrese un numero: "));

console.log("La raiz cuadrada de n es: "+ calculoRaizCuadrada(x));
console.log("El piso de n es: "+ calculoPisoRaizCuadrada(x));