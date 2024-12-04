//Quicksort para ordenar la cadena de caracteres EXAMPLE

function quickSort(array) {
    if (array.length <= 1) {
        return array;
    }

    const pivot = array[array.length - 1];
    const left = [];
    const right = [];

    for (let i = 0; i < array.length - 1; i++) {
        if (array[i] < pivot) {
            left.push(array[i]);
        } else {
            right.push(array[i]);
        }
    }

    // Combinar las particiones ordenadas con el pivote (Javascript permite concatenar arrays con el operador ...)
    return [...quickSort(left), pivot, ...quickSort(right)];
}



const list2 = ['E', 'X', 'A', 'M', 'P', 'L', 'E'];
console.log("QuickSort:", quickSort(list2));
