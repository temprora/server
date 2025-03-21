const usersQuantityIO = require('./users_quantity')

function usersIO(io, socket) {
  usersQuantityIO(io, socket)
}

module.exports = usersIO
