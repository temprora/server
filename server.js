const { instrument } = require('@socket.io/admin-ui')
const io = require('socket.io')(process.env.PORT || 9090, {
  cors: { origin: ['https://temprora.web.app'] },
})
const socketIoServer = require('./io/io')

socketIoServer(io)
instrument(io, {
  auth: false,
})
