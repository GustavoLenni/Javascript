// function inverter(str){
//     return str.split('').reverse().join('');
// }
// console.log(inverter("hello"))
//str representa a string
//split trasforma a string em array 
//reverse inverte o array
//join transforma em string novamente 

//com array
// function invertarr(arr){
//     return arr.reverse();
// }
// console.log(invertarr([1,2,3,4]))

// function invertnum(num){
//       return parseInt(num.toString().split('').reverse().join(''),10)
// }
// console.log(invertnum(1234));
//tostring convert para string 
//split convert para array 
//reverse inverte os números do array
//join volta para string
//10 volta para numeros 

// com entrada do usuario
const prompt = require('prompt-sync')();
const num = parseInt(prompt("Digite alguns números:"), 10);

function invertnum(num){
    return parseInt(num.toString().split('').reverse().join(''),10)
}
console.log(invertnum(num));