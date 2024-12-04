//Mergesort para ordenar la cadena de caracteres EXAMPLE

function mergeSort(array) {
    if (array.length <= 1) {
        return array;
    }

    // Dividir el array en mitades
    const mid = Math.floor(array.length / 2);
    const left = mergeSort(array.slice(0, mid));
    const right = mergeSort(array.slice(mid));

    // Combinar las mitades ordenadas
    return merge(left, right);
}
//Funcion que combina ambos arrays
function merge(left, right) {
    let result = [];
    let i = 0, j = 0;

    // Combinar elementos de las dos mitades
    while (i < left.length && j < right.length) {
        if (left[i] < right[j]) {
            result.push(left[i]);
            i++;
        } else {
            result.push(right[j]);
            j++;
        }
    }

    // Añadir elementos restantes de la izquierda (si hay)
    while (i < left.length) {
        result.push(left[i]);
        i++;
    }

    // Añadir elementos restantes de la derecha (si hay)
    while (j < right.length) {
        result.push(right[j]);
        j++;
    }

    return result;
}

const list1 = ['E', 'X', 'A', 'M', 'P', 'L', 'E'];
console.log("MergeSort:", mergeSort(list1));


