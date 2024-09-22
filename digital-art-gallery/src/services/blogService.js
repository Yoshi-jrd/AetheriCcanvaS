import { db } from './firebase-config';

export const getBlogPosts = async () => {
  const snapshot = await db.collection('blogPosts').get();
  return snapshot.docs.map(doc => doc.data());
};
