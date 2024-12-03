var prompt = require('prompt-sync')(); 

function sumacuadrados(n){ 
    n = (n * (n + 1) * (2 * n + 1)) / 6;
    return n;
}

console.log("La suma de los cuadrados de los primeros n numeros es: "+ sumacuadrados(3)); // 14