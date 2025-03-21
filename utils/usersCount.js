let usersInRoom = {}
function createRoom(roomId) {
  usersInRoom[roomId] = 1
}

function joinPerson(roomId) {
  usersInRoom[roomId] = (usersInRoom[roomId] || 0) + 1
}

function leavePerson(roomId) {
  if (usersInRoom[roomId]) {
    usersInRoom[roomId]--
    if (usersInRoom[roomId] === 0) delete usersInRoom[roomId]
  }
}

function usersQuantity(roomId) {
  return usersInRoom[roomId] || 0
}

module.exports = { createRoom, joinPerson, leavePerson, usersQuantity }
