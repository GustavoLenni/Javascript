function crescente(arr){
    return arr.sort((a,b) => a-b);//função de comparação maior e menor (a,b);
}
//.sort() em JavaScript é usado para ordenar os elementos de um array. Ele modifica o array original e pode receber uma função de comparação como argumento.
console.log(crescente([1,9,5,7]))