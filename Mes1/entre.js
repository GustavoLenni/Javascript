const prompt = require('prompt-sync')();//modulo para obter entrada do usuario 
const num = Number(prompt("Digite um Número"));

function entre(num){
    if(num > 10 && num <20){
        return("O Número está entre 10 e 20 ")
    }else {
        return("O número não está entre 10 e 20 ")
    }
}
console.log(entre(num));//chamar a função certo