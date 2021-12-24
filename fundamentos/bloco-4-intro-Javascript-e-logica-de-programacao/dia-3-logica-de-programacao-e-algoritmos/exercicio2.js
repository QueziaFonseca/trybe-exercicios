//  Para o primeiro exercício de hoje, faça um programa que, dado um valor n qualquer, seja n > 1 , imprima na tela um quadrado feito de asteriscos de lado de tamanho n . Por exemplo:
// n = 5
// *****
// *****
// *****
// *****
// *****
// 
// usando for aninhado:
// n = 0
// for(let j = 1; j <= 5; j++){
//   let linha = ""
//   for(let i = 1; i<=n+1; i++ ){
//       linha += '*'  
//   }
//   console.log(linha)
//   n=n+1
// }

// simplificando
n=5
let asteriscos = "*"
let linha = ""
linha = asteriscos
for(let i =0; i< n ; i++){
  console.log (linha) 
  linha = linha + asteriscos
}
