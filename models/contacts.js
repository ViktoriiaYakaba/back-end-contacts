const { Schema, model } = require('mongoose');
const { handlerMongooseError } = require('../helpers');
const Joi = require("joi");

const contactSchema = new Schema({
    name: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
    },
    phone: {
        type: String,
        required: true,
    },
    favorite: {
        type: Boolean,
        default: false,
    }
}, { versionKey: false, timestamps: true });

contactSchema.post("save", handlerMongooseError);

const addSchema = Joi.object({
    name: Joi.string().required(),
    email: Joi.string().required(),
    phone: Joi.string().required(),
    favorite: Joi.boolean(),
});

const updateFavoriteSchema = Joi.object({
    favorite: Joi.boolean().required(),
});


const shemas = {
    addSchema,
    updateFavoriteSchema,
};

const Contact = model("contact", contactSchema);

module.exports = {
    Contact,
    shemas,
};
 