// import React, { useState } from 'react';


// // const Blog = () => {
// //     const [blogs, setBlogs] = useState([
// //         { title: 'Blog 1', description: 'Description for blog 1' },
// //         { title: 'Blog 2', description: 'Description for blog 2' },
// //         { title: 'Blog 3', description: 'Description for blog 3' },
// //         { title: 'Blog 4', description: 'Description for blog 4' },
// //         { title: 'Blog 5', description: 'Description for blog 5' },
// //         { title: 'Blog 6', description: 'Description for blog 6' },
// //         { title: 'Blog 7', description: 'Description for blog 7' },
// //         { title: 'Blog 8', description: 'Description for blog 8' },
// //         { title: 'Blog 9', description: 'Description for blog 9' },
// //         { title: 'Blog 10', description: 'Description for blog 10' },
// //         { title: 'Blog 11', description: 'Description for blog 11' },
// //         { title: 'Blog 12', description: 'Description for blog 12' },
// //     ]);

// //     const [visibleBlogs, setVisibleBlogs] = useState(9);

// //     const showMoreBlogs = () => {
// //         setVisibleBlogs((prevVisibleBlogs) => prevVisibleBlogs + 9);
// //     };

// //     return (
// //         <div className="container mx-auto p-4">
// //             <h1 className="text-3xl font-bold mb-4">Blog List</h1>
// //             <div className="grid grid-cols-3 gap-4">
// //                 {blogs.slice(0, visibleBlogs).map((blog, index) => (
// //                     <div key={index} className="bg-white shadow-md rounded-lg p-6 m-4">
// //                         <h2 className="text-xl font-semibold mb-2">{blog.title}</h2>
// //                         <p>{blog.description}</p>
// //                     </div>
// //                 ))}
// //             </div>
// //             {visibleBlogs < blogs.length && (
// //                 <button
// //                     onClick={showMoreBlogs}
// //                     className="bg-blue-500 text-white font-bold py-2 px-4 rounded mt-4"
// //                 >
// //                     Show More
// //                 </button>
// //             )}
// //         </div>
// //     );
// // };



// export default Blog;

import React from 'react';
import Card from './Card';


const Blog = () => {
    const cards = [
        { category: 'News & Events', title: 'Collaboration and Partnership update!', date: '2 Nov, 2023', image: 'https://www.toletglobe.in/static/media/image1.5bfae7c4d5860c2b5824.png' },
        { category: 'Feature Updates', title: 'Collaboration and Partnership update!', date: '2 Nov, 2023', image: 'https://www.toletglobe.in/static/media/image1.5bfae7c4d5860c2b5824.png' },
        { category: 'Brand Collaboration', title: 'Collaboration and Partnership update!', date: '2 Nov, 2023', image: 'https://www.toletglobe.in/static/media/image1.5bfae7c4d5860c2b5824.png' },
        { category: 'Life At To-Let', title: 'Collaboration and Partnership update!', date: '2 Nov, 2023', image: 'https://www.toletglobe.in/static/media/image1.5bfae7c4d5860c2b5824.png' },
        { category: 'Internship Campaigns', title: 'Collaboration and Partnership update!', date: '2 Nov, 2023', image: 'https://www.toletglobe.in/static/media/image1.5bfae7c4d5860c2b5824.png' },
        { category: 'Giveaway & Offers', title: 'Collaboration and Partnership update!', date: '2 Nov, 2023', image: 'https://www.toletglobe.in/static/media/image1.5bfae7c4d5860c2b5824.png' },
    ];

    return (
        <div className="min-h-screen bg-black p-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 m-20">
                {cards.map((card, index) => (
                    <Card key={index} {...card} />
                ))}
            </div>
        </div>
    );
};

export default Blog;

