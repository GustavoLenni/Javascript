const prompt = require('prompt-sync')();
const entrada = prompt("Digite um palindromo: ")

function palindromo(entrada){
      let textoformatado = entrada.toLowerCase();

      let invertido = textoformatado.split('').reverse().join('');

      return textoformatado === invertido;
}

console.log(palindromo(entrada))


//toLowerCase deixar letras minusculas
//split transforma string em array
// reverse inverte o array
//join transforma o array em string 
