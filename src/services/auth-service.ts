import { doc, getDoc, setDoc, Timestamp } from 'firebase/firestore';

import { db } from '../firebase/firebase-util';

import type { UserInfo as User} from '@firebase/auth-types';

const createUser = async (user: User | null) => {
    if (!user) return;
    const userRef = doc(db, `users/${user.uid}`);
    const userSnap = await getDoc(userRef);
    if (!userSnap.exists()){
        const { displayName, email } = user;
        const dateCreated = Timestamp.fromDate(new Date());
        try {
            await setDoc(userRef, {
                name: displayName,
                email: email,
                dateCreated: dateCreated
            });
        } catch(error){
            console.log("Error creating user, error message: ");
            console.log(error);
        }
    }
    return userRef;
}

export {
    createUser
};
