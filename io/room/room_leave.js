const { leavePerson, usersQuantity } = require('../../utils/usersCount')

function roomLeave(io, socket) {
  socket.on('leave-room', (userName = 'Anonymous', roomId) => {
    if (!roomId) return

    socket.leave(roomId)
    leavePerson(roomId)
    if (socket.currentRoom === roomId) socket.currentRoom = null

    socket.to(roomId).emit('user-left', userName)
    io.to(roomId).emit('users-quantity', usersQuantity(roomId))
    socket.emit('you-left', roomId)
  })
}

module.exports = roomLeave
