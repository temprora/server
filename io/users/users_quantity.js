const { usersQuantity } = require('../../utils/usersCount')

function usersQuantityIO(io, socket) {
  socket.on('users-quantity', (roomId) => {
    if (!roomId) return
    io.to(roomId).emit('users-quantity', usersQuantity(roomId))
  })
}

module.exports = usersQuantityIO
