import * as firebase from 'firebase/app';
import  {
    getAuth,
    signInWithPopup,
    GoogleAuthProvider
} from "firebase/auth";
import { getFirestore } from 'firebase/firestore';
import { getAnalytics } from 'firebase/analytics';
import { firebaseConfig } from './config';

const app = firebase.initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);
const analytics = getAnalytics(app);

const provider = new GoogleAuthProvider();
provider.setCustomParameters({prompt: 'select_account'});
const signInWithGoogle = () => signInWithPopup(auth, provider);

export {
    auth,
    analytics,
    db,
    signInWithGoogle,
};