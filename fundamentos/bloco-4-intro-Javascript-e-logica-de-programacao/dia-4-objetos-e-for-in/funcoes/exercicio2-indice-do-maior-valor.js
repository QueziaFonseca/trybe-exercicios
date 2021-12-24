// 2 - Crie uma função que receba um array de inteiros e retorne o índice do maior valor.
// Array de teste: [2, 3, 6, 7, 10, 1]; .
// Valor esperado no retorno da função: 4 .
let arrayTeste = [2, 3, 6, 7, 10, 1]; 
function indiceValorMaior(array) {    
  let maior = array[0] 
  

  for(let i = 1; i<= array.length; i++){
      if( arrayTeste[i] > maior){
          maior = array[i]
      }    
  }
 return array.indexOf(maior)
  }

 
  console.log(indiceValorMaior(arrayTeste))











// Solução Trybe
// function indiceDoMaior(numeros) {
//     let indiceMaior = 0;
//     for (let indice in numeros) {
//       if (numeros[indiceMaior] < numeros[indice]) {
//         indiceMaior = indice;
//       }
//     }
//     return indiceMaior;
//   }
  
//   console.log(indiceDoMaior([2, 3, 6, 7, 10, 1])); 