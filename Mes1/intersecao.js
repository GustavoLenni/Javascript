const arr1 = [1,6,7,8];
const arr2 = [1,8,4,5];
function inter(arr1,arr2){
    return arr1.filter(elemento => arr2.includes(elemento));
}//filter para filtrar o array 1, ele cria um novo array contendo apenas os elementos
//do array1 e aplica a função para ver se o elemento vai ser mantido ou n 

//includes verifica se o elemento do arr1 existe no arr2
//joga os elementos iguais na const elemento e me retorna isso 
console.log(inter(arr1,arr2));