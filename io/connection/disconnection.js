const { leavePerson } = require('../../utils/usersCount')

function disconnection(socket) {
  socket.on('disconnecting', () => {
    if (socket.currentRoom) leavePerson(socket.currentRoom)
  })
}

module.exports = disconnection
