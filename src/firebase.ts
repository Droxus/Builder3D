import * as App from './App'
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore, collection, doc, setDoc, getDoc, getDocs } from "firebase/firestore";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged, setPersistence, browserLocalPersistence } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCfmgQo7ftZ_ScvGCWecO57GFNLZtRwA3c",
  authDomain: "builder-3d.firebaseapp.com",
  projectId: "builder-3d",
  storageBucket: "builder-3d.appspot.com",
  messagingSenderId: "1073318516303",
  appId: "1:1073318516303:web:8a3768749bd8c199177c3a",
  measurementId: "G-W0DF5TN6QP"
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const db = getFirestore(app);
const auth = getAuth(app);

export async function saveData(dbPath: string, value: any) {
    return new Promise((resolve) => {
        const cityRef = doc(db, dbPath);
        setDoc(cityRef, value).then(() => {
            resolve('Saved')
        })
    })
}
export async function readData(dbPath: string) {
    const docRef = doc(db, dbPath);
    const docSnap = await getDoc(docRef);
    if (docSnap.exists()) {
        return docSnap.data()
    } else {
        console.log("No such document!");
        return undefined
    }
}
export async function readAllData(dbPath: string) {
    const querySnapshot = await getDocs(collection(db, dbPath));
    let dataArr: any = []
    querySnapshot.forEach((doc) => {
        dataArr.push(doc.data())
    });
    return dataArr
}
export async function signUpUser(login: string, password: string) {
    return new Promise((resolve) => {
        createUserWithEmailAndPassword(auth, login, password)
        .then((userCredential) => {
            // Signed in 
            const user = userCredential.user;
            console.log('Signed in')
            App.setIsLogined(true)
            localStorage.setItem('isLogined', 'true')
            resolve(user)
            // ...
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            console.log(errorMessage)
            resolve(errorMessage)
            // ..
        });
    })
}
export async function signInUser(login: string, password: string) {
    return new Promise((resolve) => {
        signInWithEmailAndPassword(auth, login, password)
        .then((userCredential) => {
            // Signed in 
            const user = userCredential.user;
            console.log('Signed in')
            App.setIsLogined(true)
            localStorage.setItem('isLogined', 'true')
            resolve(user)
            // ...
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            console.log(errorMessage)
            resolve(errorMessage)
        });
    })
}
export async function checkSigning() {
    onAuthStateChanged(auth, (user) => {
        if (user) {
          // User is signed in, see docs for a list of available properties
          // https://firebase.google.com/docs/reference/js/auth.user
          const uid = user.uid;
          App.setIsLogined(true)
          localStorage.setItem('isLogined', 'true')
          console.log('Signed in')
          // ...
        } else {
          // User is signed out
          console.log('Signed out')
          // ...
        }
      });
}
// export async function autoSigning() {
//     setPersistence(auth, browserLocalPersistence)
//     .then(() => {
//         // Existing and future Auth states are now persisted in the current
//         // session only. Closing the window would clear any existing state even
//         // if a user forgets to sign out.
//         // ...
//         // New sign-in will be persisted with session persistence.
//         return signInWithEmailAndPassword(auth, email, password);
//     })
//     .catch((error) => {
//         // Handle Errors here.
//         const errorCode = error.code;
//         const errorMessage = error.message;
//     });
// }