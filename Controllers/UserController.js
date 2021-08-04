const User = require('../Modals/User')
const { createOne, getAll } = require('./handlerFactory')

exports.createUser = createOne(User)
exports.getAllUser = getAll(User)

