import { firebaseApp } from '../firebase-config';
import 'firebase/database';

const database = firebaseApp.database();

export const getArtworks = (callback) => {
  database.ref('/artworks').on('value', snapshot => {
    const data = snapshot.val();
    callback(data);
  });
};
