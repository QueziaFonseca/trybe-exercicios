const connection = require('./connection');

const getAll = async () => {
  const [books] = await connection.execute('SELECT * FROM model_example.books;');
  return books
  // .map(({ id, title, author_id }) => ({
  //   id,
  //   title,
  //   authorId: author_id,
  // })
  // );

} 

module.exports = {
  getAll,
};

// duvida
//usando o insominia, quando retorna só books, que tem o array com os 2 elementos, como que desestrurando books, ele pega o primeiro elemento sem fazer [0]?