const objectID = require('mongodb').ObjectID
const isObjectId = (id) => objectID.isValid(id)
exports.isObjectId = isObjectId
