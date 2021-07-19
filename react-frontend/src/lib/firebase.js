import firebase from "firebase/app"
import "firebase/auth"
import "firebase/firestore"

process.env.FIREBASE_API_KEY
process.env.FIREBASE_AUTH_DOMAIN
process.env.FIREBASE_PROJECT_ID
process.env.FIREBASE_STORAGE_BUCKET
process.env.FIREBASE_MESSAGING_SENDER_ID
process.env.FIREBASE_APP_ID

const firebaseConfig = {
    apiKey: ,
    authDomain: ,
    projectId: ,
    storageBucket: ,
    messagingSenderId: ,
    appId: ,
}

firebase.initializeApp(firebaseConfig)
export const auth = firebase.auth()
export const firestore = firebase.firestore()

const googleProvider = new firebase.auth.GoogleAuthProvider()

export const signInWithGoogle = () => {
    auth.signInWithPopup(googleProvider)
}

const getUserDocument = async (uid) => {
    if (!uid) return null
    try {
        const userDocument = await firestore.doc(`users/${uid}`).get()
        return {
            uid,
            ...userDocument.data()
        }
    } catch(error) {
        console.error("Error fetching user", error)
    }
}

export const generateUserDocument = async (user, additionalData) => {
    if (!user) return
    const userRef = firestore.doc(`users/${user.uid}`)
    const snapshot = await userRef.get()
    if (!snapshot.exists) {
        const { email, displayName, photoURL } = user
        try {
            await userRef.set({
                displayName,
                email,
                photoURL,
                ...additionalData
            })
        } catch(error) {
            console.error("Error creating user document", error)
        }
    }
    return getUserDocument(user.uid)
}


  
/*
<!-- The core Firebase JS SDK is always required and must be listed first -->
<script src="https://www.gstatic.com/firebasejs/8.7.1/firebase-app.js"></script>

<!-- TODO: Add SDKs for Firebase products that you want to use
     https://firebase.google.com/docs/web/setup#available-libraries -->

<script>
  // Your web app's Firebase configuration
  var firebaseConfig = {
    apiKey: "AIzaSyDTNXfi_BT6tbjH9RnVdGCxXkAnRwe6GaA",
    authDomain: "mega-video-site-react.firebaseapp.com",
    projectId: "mega-video-site-react",
    storageBucket: "mega-video-site-react.appspot.com",
    messagingSenderId: "590869617769",
    appId: "1:590869617769:web:f9b45d0fd42219c62516f8"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
</script>
*/