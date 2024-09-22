import React from 'react';
import { Link } from 'react-router-dom';

function Home() {
    return (
        <div className="container mx-auto px-4">
            <div className="hero bg-gray-200 p-10 text-center">
                <h1 className="text-4xl font-bold mb-4">Welcome to the Digital Art Gallery</h1>
                <p className="text-xl mb-6">Explore unique digital creations influenced by AI.</p>
                <Link to="/gallery" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                    Explore Gallery
                </Link>
            </div>
        </div>
    );
}

export default Home;
 