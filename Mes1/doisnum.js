const prompt = require('prompt-sync')();//modulo para obter entrada do usuario 
const num1 = Number(prompt("Digite um número"));
const num2 = Number(prompt("Digite outro número"));

if(num1 > num2){
    console.log(`${num1} é maior`);//tem dois jeitos de usar assim ou assim console.log(num + " é maior");
}else if(num1 === num2){
    console.log(` os números são iguais`);
}else{
    console.log(`${num2} é maior`);
}