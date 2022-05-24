const express = require('express');
const userModel = require('./model/UsesrModel');
const errorHandler = require('./midware/errorHandler');
const validateJoi = require('./midware/validateJoy');

	const app = express();

  app.use(express.json()) //não instalei o body parser

  app.post('/user', validateJoi, async (req, res) => {

    try {
      const user = req.body;
      const newUser = await userModel.create(user);
  
      return res.status(201).json(newUser);
      
    } catch (error) {
      console.log(error.message);
    }
  });

  app.use(errorHandler);

	const PORT = 3001;
  	app.listen(PORT, () => {
		console.log(`Ouvindo a porta ${PORT}`);
	});

  //  	app.listen('3001', () => {
	// 	console.log(`Ouvindo a porta 3001);
	// });
