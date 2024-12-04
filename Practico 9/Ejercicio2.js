
//Ejercicio 2, Utilizar el algoritmo QuickSelect para encontrar la mediana de un array (no recursivo)
function quickSelect(A, left, right, k) {
    while (left <= right) {
        const pivotIndex = Math.floor(Math.random() * (right - left + 1)) + left;
        const pivot = A[pivotIndex];
        [A[pivotIndex], A[right]] = [A[right], A[pivotIndex]];

        let i = left;
        for (let j = left; j < right; j++) {
            if (A[j] < pivot) {
                [A[i], A[j]] = [A[j], A[i]];
                i++;
            }
        }
        [A[i], A[right]] = [A[right], A[i]];

        if (i === k) {
            return A[i];
        } else if (i < k) {
            left = i + 1;
        } else {
            right = i - 1; 
        }
    }
}

const array = [9, 12, 5, 17, 20, 30, 8];
const n = array.length;
const k = Math.floor(n / 2);

console.log("La mediana es:", quickSelect(array, 0, array.length - 1, k));
