function segundonum(arr){
   if(arr.length < 2){//tem que ter pelo menor dois números
    throw Error("O array deve conter pelo menos dois números");
   }

   let primeiro = -Infinity;
   let segundo = -Infinity;

   for(let num of arr){//percorre a variavel num
    if(num > primeiro){// se o num for maior que o primeiro quer dizer que o num é o maior
        //numero no caso o primeiro e se isso é verdade o numero antigo do primeiro se torna o 
        //segundo maior
        segundo = primeiro;
        primeiro = num;
    }else if (num > segundo && num < primeiro){
        segundo = num;//se o número for maior que o segundo e menor que o primeiro quer dizer que ele 
        //é o segundo maior número
    }
    
    
   }
   if(segundo === -Infinity){//verificação segundo número
        throw Error("Não há segundo número maior");
    }
   return segundo;
}
console.log(segundonum([5,4]))