
function binarySearch(A, K) {
    let l = 0;
    let r = A.length - 1;
    let comparations=1;

    while (l <= r) {
      // Calcular el índice medio
      let m = Math.floor((l + r) / 2);
  
      // Comparar el valor en el índice medio con la clave K
      if (A[m] === K) {
        console.log("Comparaciones para llegar a este numero "+comparations);
        return "Indice " +(m+1); // Encontramos el elemento
      } else if (K < A[m]) {
        r = m - 1; // Ajustar el límite superior
      } else {
        l = m + 1; // Ajustar el límite inferior
      }
      comparations++;
    }
  
    return "No existe";
  }
 
  const array = [0, 14, 27, 31, 39, 42, 55, 70, 74, 81, 85, 93, 98];

  for(let i=0;i<array.length;i++){
console.log(binarySearch(array, array[i]));
  }