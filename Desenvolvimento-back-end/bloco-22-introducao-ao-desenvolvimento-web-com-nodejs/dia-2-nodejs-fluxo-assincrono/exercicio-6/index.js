/*
Crie um script que mostre na tela o conteúdo de um arquivo escolhido 
pelo usuário:
Pergunte à pessoa usuária qual arquivo ela deseja ler.
Leia o arquivo indicado.
Caso o arquivo não exista, exiba na tela "Arquivo inexistente" e encerre 
a execução do script.
Caso o arquivo exista, escreva seu conteúdo na tela. 
*/
const fs = require('fs').promises;
const readline = require('readline');

// Criamos uma variável readlineInterface para inicializar
// a interface de comunicação do módulo readline, conforme visto na documentação
function question(message) {
  const readlineInterface = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
  });

  return new Promise((resolve) => {
    // No entanto, abriremos a `question` dentro de uma promise
    readlineInterface.question(message, (answer) => {
      readlineInterface.close();

      // Dessa forma, quando obtivermos a resposta,
      // podemos resolver nossa Promise com essa resposta.
      // Assim, quem chama nossa função não precisa
      // se preocupar com callbacks, e pode obter a resposta
      // através da Promise que retornamos.
      resolve(answer);
    });
  });
// Criamos a função que será responsável pelo fluxo todo. Vamos chamá-la de start :
  async function startTeste() {
    // Como nossa função `question` retorna uma Promise,
    // podemos utilzar `await` para obter a resposta.
    const fileName = await question('Digite o caminho do arquivo que deseja ler: ');

    try {
      // Tentamos realizar a leitura do arquivo
      const fileContent = await fs.readFile(fileName, 'utf-8');
      // E exibir seu resultado na tela
      console.log(fileContent);
    } catch (err) {
      // Caso um erro aconteça, exibimos a mensagem de erro na tela.
      console.log('Arquivo inexistente');
    }
  }
}

startTeste();
