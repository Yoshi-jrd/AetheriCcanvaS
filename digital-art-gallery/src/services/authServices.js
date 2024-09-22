import { auth } from './firebase-config';

export const createUser = async (email, password) => {
  return auth.createUserWithEmailAndPassword(email, password);
};

export const signInUser = async (email, password) => {
  return auth.signInWithEmailAndPassword(email, password);
};

export const signOutUser = async () => {
  return auth.signOut();
};
