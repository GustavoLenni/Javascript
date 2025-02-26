function contvogais(texto){
    const vogais= "aeiouAEIOU";
    let contador = 0;//que vai receber as vogais 

    for(let i = 0; i <texto.length;i++){
        if(vogais.includes(texto[i])){//se o caracter atual for uma vogal  
            contador++;// incrementa no contador uma vogal encontrada (contando)
        }
    }
    return contador;
}
console.log(contvogais("Hello world vogais"));