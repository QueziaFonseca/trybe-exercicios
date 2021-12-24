// Copie o código abaixo e faça uma função que retorne o array oddsAndEvens em ordem crescente.
// Utilize template literals para que a chamada console.log(<seu código>oddsAndEvens<seu código>); retorne "Os números 2,3,4,7,10,13 se encontram ordenados de forma crescente!".
// Bônus (opcional): tente fazer o mesmo exercício utilizando o método array.sort() . Spoiler: É possível realizar uma função que ordene qualquer array de números.
// Copie o código abaixo.


const oddsAndEvens = [13, 3, 4, 10, 7, 2];

// const sortArray = array => {
//   oddsAndEvens.sort((a, b) => a - b);
//   return oddsAndEvens
// }

// const sortedOddsAndEvens = sortArray(oddsAndEvens);
// console.log(sortedOddsAndEvens);









for (let i = 0; i <= oddsAndEvens.length; i++) {
  let t = 0;
  if (oddsAndEvens[i+1] < oddsAndEvens[i]) {
    t = oddsAndEvens[i] 
    oddsAndEvens[i] = oddsAndEvens[i+1]
    oddsAndEvens[i+1] = t
  }
  console.log(oddsAndEvens)
}

; // será necessário alterar essa linha 😉