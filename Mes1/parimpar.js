// const num = prompt("Digite um número");
// function impar(num){
//     if(num % 2 == 0){
//         return("Número Par")
//     }else{
//         return("Número Impar")
//     }
// } Esse é usado por navegadores por causa do Prompt caso queira inicializar no
// Node.js isso n daria forma correta no node.js abaixo

const prompt = require('prompt-sync')();//modulo para obter entrada do usuario 

const num = prompt("Digite um número: ");//entrada do usuario 
if (num % 2 === 0) {// se o numero for divisivel por 2 é um número par caso contrario numero impar
  console.log("Número Par");
} else {
  console.log("Número Ímpar");
}
