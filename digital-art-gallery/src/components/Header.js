import React from 'react';
import { Link } from 'react-router-dom';

function Header() {
    return (
        <header className="bg-gray-800 text-white p-4">
            <nav className="container mx-auto flex justify-between items-center">
                <h1 className="text-lg font-bold">Digital Art Gallery</h1>
                <div>
                    <Link to="/" className="px-3 py-2 hover:bg-gray-700 rounded">Home</Link>
                    <Link to="/gallery" className="px-3 py-2 hover:bg-gray-700 rounded">Gallery</Link>
                    <Link to="/blog" className="px-3 py-2 hover:bg-gray-700 rounded">Blog</Link>
                    <Link to="/donate" className="px-3 py-2 hover:bg-gray-700 rounded">Donate</Link>
                </div>
            </nav>
        </header>
    );
}

// In Header.js or wherever you define navigation links
<Link to="/" className="nav-link" aria-label="Navigate to Home page">Home</Link>


export default Header;
