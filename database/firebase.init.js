const { initializeApp } = require('firebase/app')
const { getFirestore } = require('firebase/firestore')
const dotenv = require('dotenv')

dotenv.config()

const appFirebase = initializeApp(JSON.parse(process.env.FIREBASE_CONFIG))
const firebaseFirestore = getFirestore(appFirebase)

module.exports = { firebaseFirestore }
