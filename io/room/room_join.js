const {
  leavePerson,
  joinPerson,
  usersQuantity,
} = require('../../utils/usersCount')

function roomJoin(io, socket) {
  socket.on('join-room', (roomId, userName = 'Anonymous') => {
    if (!roomId) return

    if (socket.currentRoom) {
      socket.leave(socket.currentRoom)
      leavePerson(socket.currentRoom)
    }

    socket.join(roomId)
    socket.currentRoom = roomId
    joinPerson(roomId)

    socket.to(roomId).emit('user-joined', { chatId: roomId, userName })
    io.to(roomId).emit('users-quantity', usersQuantity(roomId))
    socket.emit('you-joined', roomId)
  })
}

module.exports = roomJoin
