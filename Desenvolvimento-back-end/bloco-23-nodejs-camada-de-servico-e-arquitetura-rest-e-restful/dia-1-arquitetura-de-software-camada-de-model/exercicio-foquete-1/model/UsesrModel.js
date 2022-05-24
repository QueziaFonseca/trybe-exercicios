const connection = require('./connection');

const create = async (user) => {
  const { firstName, lastName, email, password } = user;
  const query = "INSERT INTO users_crud.users ( first_name, last_name, email, password) VALUES (?, ?, ?, ?);";
  const [{insertId}] = await connection.execute(query, [firstName, lastName, email, password])
  // console.log(result)
  return {
    id: insertId,
    firstName,
    lastName,
    email,
  }

}


// criar uma função que vai adicionar o usuario no banco de dados
module.exports = {
  create, 
};