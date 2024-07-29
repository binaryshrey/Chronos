import { db } from '../components/Firebase';
import {
  query,
  collection,
  onSnapshot,
  updateDoc,
  doc,
  addDoc,
  deleteDoc,
} from 'firebase/firestore';


export const saveUserData = async (user) => {
    try {
        await addDoc(collection(db, 'users'), {
            displayName : user.displayName,
            email: user.email,
            uid: user.uid,
            phoneNumber : user.phoneNumber,
            photoURL : user.photoURL,
            onboarded : false,
        }, { merge: true });
      
      console.log('User data saved to Firestore.');
    } catch (error) {
      console.error('Error saving user data:', error);
    }
  };
