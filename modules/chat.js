const {
  loadFromFirestore,
  increaseTo,
} = require('../database/firebase.firestore.js')
const { generateNewChatId } = require('./utils/chat.util.js')

async function getNewChatId() {
  const num = (await loadFromFirestore('milestones/chats')).created

  const id = generateNewChatId(num)
  await increaseTo('milestones/chats', 'created')

  return id ? { ok: true, data: id } : { ok: false }
}

module.exports = { getNewChatId }
