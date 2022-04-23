// Crie uma função que recebe três parâmetros retorna uma Promise .
// Caso algum dos parâmetros recebidos não seja um número, rejeite a Promise com o motivo `"Informe apenas números"`.
// Caso todos os parâmetros sejam numéricos, some os dois primeiros e multiplique o resultado pelo terceiro (`(a + b) * c`).



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