// 1-Crie uma função que receba um número e retorne seu fatorial.
let produto = 1;
const fatorial = n => {
    for (let i = 1; i <= n; i += 1) {
        produto = i * produto
    }
    return produto
}

const fatorialDeN = fatorial(4);
// console.log(fatorialDeN)

//2-Crie uma função que receba uma frase e retorne qual a maior palavra.

// let fraseString = 'Antônio  foi no banheiro e não sabemos o  que xxxxxxxxxxxxxxxxxxxx';
const maiorPalavra = (fraseString) => {
    let arraySring = fraseString.split(" ");
    let maior = arraySring[0].length;
    let maiorString = arraySring[0];
    for (let i = 1; i < arraySring.length; i += 1) {
        if (arraySring[i].length > maior) {
            maior = arraySring[i].length;
            maiorString = arraySring[i];
        }
    }
    // console.log(maiorString);
    return maiorString;
}

console.log(maiorPalavra('Antônio  foi no banheiro xxxxxxxxxxxxxxxxxxx e não sabemos o  que x')); 

// Longestword com sort em uma linha.
// const longestWord = text => text.split(' ').sort((wordA, wordB) => wordB.length - wordA.length)[0];

// console.log(longestWord("Antonio foi no banheiro e não sabemos o que aconteceu"));