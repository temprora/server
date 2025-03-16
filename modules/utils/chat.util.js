function generateNewChatId(num) {
  let result = ''
  const base62 =
    '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ'

  while (num > 0) {
    result = base62[num % 62] + result
    num = Math.floor(num / 62)
  }

  return result.padStart(11, base62[0])
}

module.exports = { generateNewChatId }
