const Joi = require('joi');

module.exports = (req, _res, next) => {
  const {error} = Joi.object({
    firstName: Joi.string().min(3).required(),
    lastName: Joi.string().min(3).required(),
    email: Joi.string().email().required(),
    password: Joi.string().min(6).required(),
  }).validate(req.body)

  if(error) {
     return next(error);
  }

 next()
}
