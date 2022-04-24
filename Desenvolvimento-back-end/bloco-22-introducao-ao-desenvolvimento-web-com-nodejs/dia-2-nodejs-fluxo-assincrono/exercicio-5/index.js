/* 
Crie uma função que lê e escreve vários arquivos ao mesmo tempo.
Utilize o Promise.all para manipular vários arquivos ao mesmo tempo.

Dado o seguinte array de strings: ['Finalmente', 'estou', 'usando', 
'Promise.all', '!!!'] Faça com que sua função crie um arquivo contendo 
cada string, sendo o nome de cada arquivo igual a file<index + 1>.txt . 
Por exemplo, para a string "Finalmente", o nome do arquivo é file1.txt .

Programe sua função para que ela faça a leitura de todos os arquivos criados 
no item anterior, armazene essa informação e escreva em um arquivo chamado
 fileAll.txt . O conteúdo do arquivo fileAll.txt deverá ser Finalmente 
 estou usando Promise.all !!! .
*/

// i)Importar o módulo fs e criar a função com o Array de strings
const fs = require('fs').promises;
async function arrayToFile() {
  const strings = ['Finalmente', 'estou', 'usando', 'Promise.all', '!!!'];
  // ii)Utilizar a função map para criar um Array de Promises, uma para cada arquivo
  const createFilesPromises = strings
    .map((string, index) => fs.writeFile(`./file${index + 1}.txt`, string));
// iii)Utilizar Promise.all para aguardar a escrita de todos os arquivos 
//- ou seja, a resolução de todas as promises
await Promise.all(createFilesPromises);
// iv) Realizar a leitura dos arquivos criados
const fileNames = [
  'file1.txt',
  'file2.txt',
  'file3.txt',
  'file4.txt',
  'file5.txt',
];

// criamos uma promise de leitura para cada item no array `fileNames`
const readFilesPromises = fileNames
      .map((fileName) => fs.readFile(fileName, 'utf-8'));
//  // e aqui esperamos que todas as leituras sejam resolvidas
const fileContents = await Promise.all(readFilesPromises);
// Concatenar o conteúdo dos arquivos e criar o arquivo novo
const newFileContent = fileContents.join(' ');
console.log(newFileContent)
await fs.writeFile('./fileAll.txt', newFileContent);
}


 arrayToFile();

