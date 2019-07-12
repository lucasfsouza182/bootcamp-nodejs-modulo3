const Joi = require('joi')

module.exports = {
  body: {
    name: Joi.string().require(),
    email: Joi.string().email().require(),
    password: Joi.string().require().min(6)
  }
}
