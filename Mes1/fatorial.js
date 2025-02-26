const prompt = require('prompt-sync')();
const n = Number(prompt("Digite um número"));

function  fatorial(n){
    let resultado = 1;//variavel que vai receber o resultado 
    for(let i = 2; i <= n; i++){//enquanto i for menor que n no caso o nosso número
        //ele vai continuar multiplicando.
        resultado *= i;//* multiplação
    }
    return resultado;
}
console.log(`O fatorial do seu número é: ${fatorial(n)}`)