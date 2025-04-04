const { doc, getDoc, increment, updateDoc } = require('firebase/firestore')
const { firebaseFirestore } = require('./firebase.init.js')

async function loadFromFirestore(path) {
  const docRef = doc(firebaseFirestore, path)
  const docSnap = await getDoc(docRef)
  return docSnap.exists() ? docSnap.data() : 'notfound'
}

async function increaseTo(path, field, quantity = 1) {
  const docRef = doc(firebaseFirestore, path)
  await updateDoc(docRef, { [field]: increment(quantity) })
}

module.exports = { loadFromFirestore, increaseTo }
