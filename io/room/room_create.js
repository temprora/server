const { getNewChatId } = require('../../modules/chat')
const { createRoom, usersQuantity } = require('../../utils/usersCount')

function roomCreate(io, socket) {
  socket.on('create-room', async () => {
    const id = await getNewChatId()
    const roomId = id?.data

    if (!roomId) return

    socket.join(roomId)
    createRoom(roomId)

    io.to(roomId).emit('room-created', roomId)
    io.to(roomId).emit('users-quantity', usersQuantity(roomId))
  })
}

module.exports = roomCreate
