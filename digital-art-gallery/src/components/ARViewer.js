import React from 'react';

function ARViewer({ art }) {
  return (
    <div className="ar-viewer">
      <h3>View this artwork in your space</h3>
      <button className="bg-orange-500 hover:bg-orange-700 text-white font-bold py-2 px-4 rounded">
        Open AR View
      </button>
    </div>
  );
}

export default ARViewer;
