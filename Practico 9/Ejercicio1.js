
//Funcion para resolver la particion de un array
function partition(A, left, right) {
    const pivot = A[right];
    let i = left;
    for (let j = left; j < right; j++) {
        if (A[j] < pivot) {
            [A[i], A[j]] = [A[j], A[i]]; 
            i++;
        }
    }

    [A[i], A[right]] = [A[right], A[i]];
    return i; 
}

//Funcion para encontrar la mediana de un array
function quickSelect(A, left, right, k) {
    if (left === right) {
    return A[left];
    }
    const pivotIndex = partition(A, left, right);
    
    if (pivotIndex === k) {
    return A[pivotIndex];
    } else if (pivotIndex > k) {
        return quickSelect(A, left, pivotIndex - 1, k);
    } else {
        return quickSelect(A, pivotIndex + 1, right, k);
    }
}

const array = [9, 12, 5, 17, 20, 30, 8];
const n = array.length;
const k = Math.floor(n / 2);

console.log("La mediana es:", quickSelect(array, 0, n - 1, k));
