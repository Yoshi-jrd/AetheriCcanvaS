import React, { useEffect, useState } from 'react';
import { db } from '../services/firebase-config';

function Blog() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchPosts = async () => {
      const snapshot = await db.collection('blogPosts').get();
      const postsArray = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
      setPosts(postsArray);
    };

    fetchPosts();
  }, []);

  return (
    <div className="blog space-y-4">
      {posts.map(post => (
        <article key={post.id} className="p-5 bg-white shadow rounded-lg">
          <h2 className="text-xl font-bold">{post.title}</h2>
          <p>{post.content}</p>
        </article>
      ))}
    </div>
  );
}

export default Blog;
