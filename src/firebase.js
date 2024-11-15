
import { initializeApp } from "firebase/app";
import { createUserWithEmailAndPassword, getAuth, signInWithEmailAndPassword, signOut,  } from "firebase/auth";
import { addDoc, collection, getFirestore } from "firebase/firestore";
import { toast } from "react-toastify";

const firebaseConfig = {
    apiKey: "AIzaSyDnQNgmmsEeNMX-SeQ7lVM5uVDidgKgoAc",
    authDomain: "netflix-clone-434e0.firebaseapp.com",
    projectId: "netflix-clone-434e0",
    storageBucket: "netflix-clone-434e0.firebasestorage.app",
    messagingSenderId: "113106351456",
    appId: "1:113106351456:web:a5b94ac2e1a1f47ea1da05"
};


const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

const signup = async (name, email, password) => {
    try {
        const res = await createUserWithEmailAndPassword(auth, email, password);
        const user = res.user;
        await addDoc(collection(db, "user"), {
            uid: user.uid,
            name,
            authProvider: "local",
            email,

        })
    } catch (error) {
        console.log(error);
        toast.error(error.code.split('/')[1].split('-').join(" "));
    }
}

const login = async (email,password)=>{
    try {
        await signInWithEmailAndPassword (auth , email ,password);
    } catch (error) {
        console.log(error);
        toast.error(error.code.split('/')[1].split('-').join(" "));
    }
}

const logout = async () => {
    signOut(auth);
}

export {auth,db,login,signup,logout};