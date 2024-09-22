import { db } from './firebase-config';

export const getArtworks = async () => {
  const snapshot = await db.collection('artworks').get();
  return snapshot.docs.map(doc => doc.data());
};
