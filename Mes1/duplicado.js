function duplicado(arr){
    return [...new Set(arr)];
}
const numeros = [1,1,2,2,3,3,4,4];
const semduplicado = duplicado(numeros);
console.log(semduplicado)