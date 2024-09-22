import React from 'react';

function Blog() {
    const posts = [{ id: 1, title: "Blog Post 1", summary: "Summary of post 1" }, { id: 2, title: "Blog Post 2", summary: "Summary of post 2" }];

    return (
        <div className="container mx-auto px-4">
            <ul>
                {posts.map((post) => (
                    <li key={post.id} className="bg-white p-4 mb-4 shadow">
                        <h2 className="text-2xl font-bold">{post.title}</h2>
                        <p className="text-gray-700 text-base">{post.summary}</p>
                        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                            Read More
                        </button>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default Blog;
