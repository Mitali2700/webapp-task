import { FacebookAuthProvider, signInWithPopup } from "firebase/auth"

const fbAuthProvider = new FacebookAuthProvider();

export const FacebookAuth = () =>{
    const fbAuth = signInWithPopup(auth, fbAuthProvider);
    return fbAuth;
}