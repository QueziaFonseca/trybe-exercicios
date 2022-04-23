/*
Escreva código para consumir a função construída no exercício anterior
Copiar
- Gere um número aleatório de 1 a 100 para cada parâmetro que a função recebe. Para gerar um número aleatório, utilize o seguinte trecho de código: `Math.floor(Math.random() * 100 + 1)`.
- Chame a função do exercício anterior, passando os três números aleatórios como parâmetros.
- Utilize `then` e `catch` para manipular a Promise retornada pela função:
  1. Caso a Promise seja rejeitada, escreva na tela o motivo da rejeição.
  2. Caso a Promise seja resolvida, escreva na tela o 
*/


function somaNumeros(a, b, c) {
  return new Promise((resolve,reject) => {
    if (typeof a !== 'number' || typeof b !== 'number' || typeof c !== 'number') {
      return reject(new Error('Informe apenas números')); 
    }
    
    const result = (a + b) * c;

    if (result < 50) {
      return reject(new Error('Valor muito baixo'));
    }

    resolve(result);
  });

}

somaNumeros(10, 10, 10)
  .then((resolve) => console.log(resolve))
  .catch((error) => console.log("(10, 10, 10)", error.message));

  somaNumeros(1, 1, 'a')
  .then((resolve) => console.log(resolve))
  .catch((error) => console.log("(1, 1, 'a')",error.message));

  somaNumeros(1, 1, 1)
  .then((resolve) => console.log(resolve))
  .catch((error) => console.log( "(1, 1, 'a')" ,error.message));

  // function doMath(a, b, c) {
  //   return new Promise((resolve, reject) => {
  //     if (typeof a !== 'number' || typeof b !== 'number' || typeof c !== 'number') {
  //       return reject(new Error('Informe apenas números')); 
  //     }
  //     const result = (a + b) * c;
  //      if (result < 50) {
  //        return reject(new Error('Valor muito baixo'));
  //      }
  //      resolve(result);

  //   });
  // }

  // doMath(10, 10, 10)
  // .then((resolve) => console.log(resolve))
  // .catch((error) => console.log(error.message));