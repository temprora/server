const dotenv = require('dotenv')
const { getNewChatId } = require('../modules/chat')

dotenv.config()

function socketIoServer(io) {
  io.on('connection', (socket) => {
    socket.on('create-room', async () => {
      const id = await getNewChatId()
      const roomId = id.data

      socket.join(roomId)
      io.to(roomId).emit('room-created', roomId)
    })

    socket.on('join-room', (roomId, userName) => {
      if (!roomId) return
      socket.join(roomId)
      socket.to(roomId).emit('user-joined', { chatId: roomId, userName })
      socket.emit('you-joined', roomId)
    })

    socket.on('leave-room', (userName, roomId) => {
      if (!roomId) return
      socket.leave(roomId)
      socket.to(roomId).emit('user-left', userName)
      socket.emit('you-left', roomId)
    })

    socket.on('message-send', (message, roomId) => {
      socket.to(roomId).emit('message-receive', message)
    })
  })
}

module.exports = socketIoServer
