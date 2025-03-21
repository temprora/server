const { instrument } = require('@socket.io/admin-ui')
const { Server } = require('socket.io')
const roomIO = require('./io/room/room')
const usersIO = require('./io/users/users')
const messageIO = require('./io/message/message')
const disconnection = require('./io/connection/disconnection')

const PORT = process.env.PORT || 8080
const ALLOWED_ORIGINS = process.env.ALLOWED_ORIGINS?.split(',') || [
  'https://temprora.web.app',
  'http://localhost:3000',
]

const io = new Server(PORT, {
  cors: { origin: ALLOWED_ORIGINS },
})

io.on('connection', (socket) => {
  roomIO(io, socket)
  usersIO(io, socket)
  messageIO(socket)
  disconnection(socket)
})

instrument(io, {
  auth: false,
})
