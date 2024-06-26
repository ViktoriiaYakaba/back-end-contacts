const { isValidObjectId } = require('mongoose');
const { HttpError } = require('./HttpError');

const isValidId = (req, res, next) => {
    const { id } = req.parms;
    if (!isValidObjectId(id)) {
       next(HttpError(400, `${id} is not id` )) 
    }
    next();
}

module.exports = isValidId;
