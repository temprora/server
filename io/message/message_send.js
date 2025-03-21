function messageSend(socket) {
  socket.on('message-send', (message, roomId) => {
    socket.to(roomId).emit('message-receive', message)
  })
}

module.exports = messageSend
