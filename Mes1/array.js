const numeros = [10,20,30,40]//array

function somar(numeros){
    let soma = 0;
    for(let p =0; p < numeros.length; p++){//
        soma += numeros[p];
    }
    return soma
}
console.log(somar(numeros));//for padrão