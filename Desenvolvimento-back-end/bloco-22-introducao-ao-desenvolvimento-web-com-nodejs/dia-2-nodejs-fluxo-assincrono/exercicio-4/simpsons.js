/* 
4 - Crie uma função que leia todos os dados do arquivo e imprima cada personagem no formato id - Nome . Por exemplo: 1 - Homer Simpson .
*/
// i)Importar o módulo fs/promises e realizar a leitura do arquivo dentro da função readAll
//ii)- Converter o conteúdo do arquivo de JSON para um Array utilizando `JSON.parse`
//iii)- Mapear cada objeto do Array para uma string no formato correto
// iv) - Exibir as strings na tela
const fs = require('fs').promises;

// function readAll() {
//   fs.readFile('./simpsons.json', 'utf-8')
//   .then((fileContent) => {
//     const simpsons = JSON.parse(fileContent);
//     const strings = simpsons.map((id,name)=> `${id} - ${name}`);
//     strings.forEach((string) => console.log(string));
//   });
// }

// async function readAll() {
//   const fileContent = await fs.readFile('./simpsons.json', 'utf-8');
//   const simpsonsArray = JSON.parse(fileContent);
//   const strings = simpsonsArray.map(({id,name})=> `${id} - ${name}`);

//   strings.forEach((string) => console.log(string));
// }

/* Crie uma função que receba o id de uma personagem como parâmetro e 
retorne uma Promise que é resolvida com os dados da personagem 
que possui o id informado. Caso não haja uma personagem com o id 
informado, rejeite a Promise com o motivo "id não encontrado".
*/

async function getSimpsonById(id) { // usar await ao executar (func assincrona)
  const fileContent = await fs.readFile('./simpsons.json', 'utf-8');
  const simpsonsArray = JSON.parse(fileContent);
  const chosenSimpson = simpsonsArray.find((simpson) => Number(simpson.id) === id)

  if(!chosenSimpson) {
    throw new Error('id não encontrado'); // throw rejeita a Promise
  }

  return chosenSimpson;   // return resolve a Promise.
}


// A função main é apenas para termos um ponto de entrada centralizado para o nosso script
/*Para receber o retorno dessa função assíncrona, ou seja, a resolução dessa promise,
 precisamos usar ou `await` ou `.then` ao executá-la. Assim:
*/

  // async function main() {
  //   const simpson = await getSimpsonById(1);
  //   console.log(simpson);
  // }
  // // Opção 2:
  // function main() {
    //   getSimpsonById(1)
    //     .then(simpson => console.log(simpson));
    // }
 

  /*Crie uma função que altere o arquivo simpsons.json retirando os 
  personagens com id 10 e 6.
Criar a função e realizar a leitura do arquivo e o parsing do JSON
  */

async function filterSimpsons() {
  const fileContent = await fs
    .readFile('./simpsons.json', 'utf-8');
  const simpsons = JSON.parse(fileContent);
  const newArray = simpsons.filter((simpson)=> simpson.id !== '10' && simpson.id !== '6' )
  console.log(newArray)
  // Escrever no arquivo o novo array filtrado
  await fs.writeFile('./simpsons.json', JSON.stringify(newArray));
}

// Chame a função na `main`
// function main() {
//   filterSimpsons();
//   // caso queira esperar a resolução, use o `await` ou `.then` como fizemos anteriormente
// }

/* 
Crie uma função que leia o arquivo simpsons.json e crie um novo 
arquivo, chamado simpsonFamily.json , contendo as personagens 
com id de 1 a 4.
-Escrever o novo arquivo no disco

*/
async function createSimpsonsFamily() {
  // Criar a função e realizar a leitura do arquivo e o parsing do JSON
  const fileContent = await fs
    .readFile('./simpsons.json', 'utf-8');
  const simpsons = JSON.parse(fileContent);
  // filtrar os personagens

  const simpsonsFamily = simpsons.filter((simpson)=> simpson.id < 5 )
  // console.log(newArray)
  // Escrever o novo arquivo no disco


  await fs.writeFile('./simpsonsFamily.json', JSON.stringify(simpsonsFamily));
}
// Chame a função na `main`

// function main() {
//   createSimpsonsFamily();
// }

/* 
Crie uma função que adicione ao arquivo simpsonFamily.json 
o personagem Nelson Muntz .
*/
async function addNelsonToFamily() {
  // Criar a função e realizar a leitura do arquivo e o parsing do JSON
  const fileContent = await fs
    .readFile('./simpsonsFamily.json', 'utf-8');
  const simpsonsFamily = JSON.parse(fileContent);
 // Adicionar uma nova pessoa ao array de `simpsonsFamily`
    simpsonsFamily.push({ id: '8', name: 'Nelson Muntz' });
  // Escrever o novo arquivo no disco
  await fs.writeFile('./simpsonsFamily.json', JSON.stringify(simpsonsFamily));
}

// function main() {
//   addNelsonToFamily();
// }


/*Crie uma função que substitua o personagem Nelson Muntz pela 
personagem Maggie Simpson no arquivo simpsonFamily.json .*/


async function addMaggieToFamily() {
  // Criar a função e realizar a leitura do arquivo e o parsing do JSON
  const fileContent = await fs
    .readFile('./simpsonsFamily.json', 'utf-8');
  const simpsonsFamily = JSON.parse(fileContent);
 //  Filtramos o array para remover o personagem Nelson
  const simpsonsWithoutNelson = simpsonsFamily.filter((simpson)=> simpson.id !== '8');
  // console.log(newArray)
  // Criamos um novo Array contendo a personagem Maggie
  const simpsonsWithMaggie = simpsonsWithoutNelson
  .concat([{ id: '15', name: 'Maggie Simpson' }]);
// com spread seria assim: 
  // const simpsonsWithMaggie = [ ...simpsonsWithoutNelson, simpsonsWithMaggie ]
 // Escrevemos o novo array no arquivo e retornamos a promise de escrita
  await fs.writeFile('./simpsonsWithMaggie.json', JSON.stringify(simpsonsWithMaggie));
}

function main() {
  addMaggieToFamily() 
}
main();