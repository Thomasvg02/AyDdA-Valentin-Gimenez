//Funcion para ordenar los discos con BubbleSort
function bubblesortDisks(discos) {
    const n = discos.length;
    let cambios = 0; 

    // Bubble Sort para mover 🔴 hacia la izquierda y 🔵 hacia la derecha
    for (let i = 0; i < n - 1; i++) {
        for (let j = 0; j < n - 1 - i; j++) {
            if (discos[j] === "🔵" && discos[j + 1] === "🔴") {
                [discos[j], discos[j + 1]] = [discos[j + 1], discos[j]];
                cambios++;
            }
        }
    }

    return { discosResultado: discos, cambios };
}

//Implementacion
const discosArray = ["🔴", "🔵", "🔴", "🔵", "🔴", "🔵", "🔴", "🔵"];
const result = bubblesortDisks(discosArray);

console.log("Discos ordenados:", result.discosResultado.join(""));
console.log("Número de intercambios:", result.cambios);
