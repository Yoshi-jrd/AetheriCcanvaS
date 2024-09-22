import React, { useEffect, useState } from 'react';
import { db } from '../services/firebase-config';

function Gallery() {
  const [artworks, setArtworks] = useState([]);

  useEffect(() => {
    const fetchArtworks = async () => {
      const snapshot = await db.collection('artworks').get();
      const artworksArray = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
      setArtworks(artworksArray);
    };

    fetchArtworks();
  }, []);

  return (
    <div className="gallery grid grid-cols-3 gap-4">
      {artworks.map(art => (
        <div key={art.id} className="artwork-card">
          <img src={art.imageUrl} alt={art.title} className="w-full" />
          <div className="p-4">
            <h3 className="text-lg font-bold">{art.title}</h3>
            <p>{art.description}</p>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Gallery;
