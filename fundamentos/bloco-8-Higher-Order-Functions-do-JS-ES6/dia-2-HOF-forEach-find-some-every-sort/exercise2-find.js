//Array de objetos
const books = [
  {
    id: 1,
    name: 'As Crônicas de Gelo e Fogo',
    genre: 'Fantasia',
    author: {
      name: 'George R. R. Martin',
      birthYear: 1948,
    },
    releaseYear: 1991,
  },
  {
    id: 2,
    name: 'O Senhor dos Anéis',
    genre: 'Fantasia',
    author: {
      name: 'J. R. R. Tolkien',
      birthYear: 1892,
    },
    releaseYear: 1954,
  },
  {
    id: 3,
    name: 'Fundação',
    genre: 'Ficção Científica',
    author: {
      name: 'Isaac Asimov',
      birthYear: 1920,
    },
    releaseYear: 1951,
  },
  {
    id: 4,
    name: 'Duna',
    genre: 'Ficção Científica',
    author: {
      name: 'Frank Herbert',
      birthYear: 1920,
    },
    releaseYear: 1965,
  },
  {
    id: 5,
    name: 'A Coisa',
    genre: 'Terror',
    author: {
      name: 'Stephen King',
      birthYear: 1947,
    },
    releaseYear: 1986,
  },
  {
    id: 6,
    name: 'O Chamado de Cthulhu',
    genre: 'Terror',
    author: {
      name: 'H. P. Lovecraft',
      birthYear: 1890,
    },
    releaseYear: 1928,
  },
];

// Adicione o código do exercício aqui:
//   2 - Retorne o nome do livro de menor nome.
// i)encontrar books.nome que tem o menor length
// ii)retornar o nome do respectivo livro
// Dica: use a função forEach .

function smallerName() {
  let bookName = books[0].name; // recebe o valor nome do primeiro elemento
  books.forEach((book) => {
   if(book.name.length < bookName.length){
    bookName = book.name
   }
  });
  // Variável nameBook que receberá o valor do menor nome;
  // return nameBook;
  return bookName;
}
console.log(smallerName (books));


//solucao trybe
// function smallerName() {
//   let bookName;
//   books.forEach((book) => {
//     if (!bookName // força a bookName recebe o valor do primeiro elemento book.name
//       || book.name.length < bookName.length) { //separa o menor valor de book.name 
//       bookName = book.name; // guarda o primeiro valor, e se houver outro menos guarda novamente
//     }
//   })
//   // Variável nameBook que receberá o valor do menor nome;
//   return bookName;
// }
// console.log(smallerName(books));
