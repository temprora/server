const messageSend = require('./message_send')

function messageIO(socket) {
  messageSend(socket)
}

module.exports = messageIO
