const Joi = require('joi');

const warehouseDataSchema = Joi.object({
  warehouse_name: Joi.string().required(),
  address: Joi.string().required(),
  city: Joi.string().required(),
  country: Joi.string().required(),
  contact_name: Joi.string().required(),
  contact_position: Joi.string().required(),
  contact_phone: Joi.string().required().regex(/^\+\d{1,2}\s\(\d{3}\)\s\d{1,4}-\d{1,4}$/),
  contact_email: Joi.string().required().email(),
});

module.exports = {
  warehouseDataSchema,
};