import React from 'react';

function ArtItem({ art, onAddToCart }) {
  return (
    <div className="art-item bg-white p-4 shadow rounded">
      <img src={art.imageUrl} alt={art.title} className="w-full" />
      <div className="info p-2">
        <h3 className="text-lg font-bold">{art.title}</h3>
        <p>{art.description}</p>
        <p className="text-green-500 font-bold">${art.price}</p>
        <button onClick={() => onAddToCart(art)} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
          Add to Cart
        </button>
      </div>
    </div>
  );
}

export default ArtItem;
