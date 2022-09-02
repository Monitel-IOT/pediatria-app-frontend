import { createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut } from 'firebase/auth';
import { auth } from '../../config/firebase/firebase.config';

export const signUp = (email, password) => createUserWithEmailAndPassword(auth, email, password);

export const signIn = (email, password) => signInWithEmailAndPassword(auth, email, password);

export const logout = () => signOut(auth);
