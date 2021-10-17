

// 3 - Faça um for/in que mostre todas as chaves do objeto. Valor esperado no console: 
// personagem
// origem
// nota
// recorrente

let info = {
    personagem: 'Margarida',
    origem: 'Pato Donald',
    nota: 'Namorada do personagem principal nos quadrinhos do Pato Donald',
  };
  info.recorrente = 'Sim'
  //Mostrar chave do objeto
  // for (let key in info) {
  //  console.log( key);
  // }

//4- Faça um novo for/in , mas agora mostre todos os valores das chaves do objeto. Valor esperado no console:
//   Margarida
// Pato Donald
// Namorada do personagem principal nos quadrinhos do Pato Donald
// Sim

// for (let key in info) {
//   console.log(info[key])
// }

// 5 - Agora, defina um segundo objeto com a mesma estrutura (as mesmas chaves) do primeiro e os seguintes valores: 'Tio Patinhas', 'Christmas on Bear Mountain, Dell's Four Color Comics #178', 'O último MacPatinhas', 'Sim'. Então, imprima os valores de cada objeto juntos de acordo com cada uma das chaves. Valor esperado no console:
// Margarida e Tio Patinhas
// Pato Donald e Christmas on Bear Mountain, Dell's Four Color Comics #178
// Namorada do personagem principal nos quadrinhos do Pato Donald e O último MacPatinhas
// Ambos recorrentes // Atenção para essa última linha!



let info2 = {
  personagem: 'Tio Patinhas',
  origem: "Christmas on Bear Mountain, Dell's Four Color Comics #178",
  nota: 'O último MacPatinhas',
  recorrente: 'Sim'
}

// if(info.recorrente=='Sim' && info2.recorrente=='Sim'){
//   info.recorrente = 'Ambos recorrentes';
//   info2.recorrente = ''
// }
for (const key in info,info2) {
  if(key == 'recorrente' &&
    info[key]=='Sim' && info2[key]=='Sim'){
    console.log('Ambos recorrentes')
  }else{
    console.log(`${info[key]} e ${info2[key]}`)
  }  
}  