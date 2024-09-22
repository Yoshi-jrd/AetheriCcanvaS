import React from 'react';

function Gallery() {
    const artworks = [{ id: 1, title: "Artwork 1", img: "url_to_image_1" }, { id: 2, title: "Artwork 2", img: "url_to_image_2" }]; // Add your artwork details here

    return (
        <div className="container mx-auto px-4">
            <div className="grid grid-cols-3 gap-4">
                {artworks.map((artwork) => (
                    <div key={artwork.id} className="max-w-sm rounded overflow-hidden shadow-lg">
                        <img className="w-full" src={artwork.img} alt={artwork.title} />
                        <div className="px-6 py-4">
                            <div className="font-bold text-xl mb-2">{artwork.title}</div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Gallery;
