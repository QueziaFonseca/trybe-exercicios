// Escreva um programa que receba o nome de uma peça de xadrez e retorne os movimentos que ela faz.Como desafio, faça o programa funcionar tanto se receber o nome de uma peça com letras maiúsculas quanto com letras minúsculas, sem aumentar a quantidade de condicionais.

let peca = 'Rei';

switch (peca.toLowerCase()) {
  case 'rei':
    console.log(`A peça ${peca} se move nas direções: horizontal, vertical e diagonal.`);
    break;
  case 'rainha':
    console.log(`A peça ${peca} se move nas direções: horizontal, vertical e diagonal`);
    break;
  case 'bispo':
    console.log(`A peça ${peca} se move na direção: diagonal`); 
    break;
  case 'cavalo':
    console.log(`A peça ${peca} se move em forma de “L”`); 
    break;
  case 'torre':
    console.log(`A peça ${peca} se move nas direções: horizontal, vertical.`);  
     break
  case 'peão':
    console.log(`A peça ${peca} se move para uma casa para frente.`)  
    break;
  default:
    console.log(`[ERRO] peça invalida!`);
}    