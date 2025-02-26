//exemplo mais facil com filter
const arr = [10,3,5,4];
const par = arr.filter((n) => n %2 === 0);

console.log(par);


//exemplo com função
// const arr = [10,3,5,4];
// function pares(arr){
//     const pares = [];//const que vai receber números pares
//     for(let i = 0; i < arr.length;i++){//o i vai percorrer o array, arr.length conta quantos 
//     // números tem no array, e i++ adiciona mais um para conseguir fazer o loop e ele conseguir percorrer
//     //o elemento
//         if(arr[i] %2 === 0){//se o array[i] for divisel por 2 ou se for zero ele é par
//             pares.push(arr[i]);//leva os números pares para a cont pares 
//         }
//     }
//     return pares;
// }
// console.log(pares(arr));