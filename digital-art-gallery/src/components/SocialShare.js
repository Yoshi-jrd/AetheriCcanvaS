import React from 'react';

function SocialShare({ art }) {
  const handleInstagramShare = () => {
    alert("Instagram does not support direct sharing via web. Please save the image and share it through your Instagram app.");
  };

  return (
    <div className="social-share">
      <button className="bg-blue-600 hover:bg-blue-800 text-white font-bold py-2 px-4 rounded" onClick={() => alert('Share on Facebook')}>
        Share on Facebook
      </button>
      <button className="bg-red-600 hover:bg-red-800 text-white font-bold py-2 px-4 rounded" onClick={() => alert('Share on Twitter')}>
        Share on Twitter
      </button>
      <button className="bg-pink-600 hover:bg-pink-800 text-white font-bold py-2 px-4 rounded" onClick={handleInstagramShare}>
        Share on Instagram
      </button>
    </div>
  );
}

export default SocialShare;
