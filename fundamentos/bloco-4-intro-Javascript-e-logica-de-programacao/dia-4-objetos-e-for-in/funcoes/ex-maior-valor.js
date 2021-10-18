// 2 - Crie uma função que receba um array de inteiros e retorne o índice do maior valor.
// Array de teste: [2, 3, 6, 7, 10, 1]; .
// Valor esperado no retorno da função: 4 .

function valorMaior1(array) {
    let arrayTeste =[ 2, 3, 6, 7, 10, 1]; 
    let arrayOrdenado = arrayTeste.sort(function(a,b){return a - b})
    let maiorValor = arrayOrdenado[arrayOrdenado.length-1]
    return(maiorValor)
}
// let arrayTeste= [2, 3, 6, 7, 10, 1];
// console.log(valorMaior1(teste))

//selecionar maior usando for
function valorMaior2(array) {    
    let maior = array[0] 
    for(let i = 1; i<= array.length; i++){
        if( array[i] > maior){
            maior = array[i]
        }    
    }
    return maior
}

// let arrayTeste= [2, 3, 6, 7, 10, 1];
// console.log(valorMaior2(arrayTeste))

// Solução Trybe
function indiceDoMaior(numeros) {
    let indiceMaior = 0;
    for (let indice in numeros) {
      if (numeros[indiceMaior] < numeros[indice]) {
        indiceMaior = indice;
      }
    }
    return indiceMaior;
  }
  
  console.log(indiceDoMaior([2, 3, 6, 7, 10, 1])); 