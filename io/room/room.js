const roomCreate = require('./room_create')
const roomJoin = require('./room_join')
const roomLeave = require('./room_leave')

function roomIO(io, socket) {
  roomCreate(io, socket)
  roomJoin(io, socket)
  roomLeave(io, socket)
}

module.exports = roomIO
