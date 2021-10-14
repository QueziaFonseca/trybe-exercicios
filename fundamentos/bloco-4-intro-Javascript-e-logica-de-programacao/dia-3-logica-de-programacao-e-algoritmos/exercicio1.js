//  Para o primeiro exercício de hoje, faça um programa que, dado um valor n qualquer, seja n > 1 , imprima na tela um quadrado feito de asteriscos de lado de tamanho n . Por exemplo:
n = 2
// *****
// *****
// *****
// *****
// *****

for(let j = 1; j <= n; j++){
  let linha = ""  
  for(let i = 1; i<=n; i++ ){
      linha += '*'  
  }
  console.log(linha)
}