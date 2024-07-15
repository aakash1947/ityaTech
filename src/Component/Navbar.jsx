// src/components/Navbar.jsx
import React from 'react';
import { Link } from 'react-router-dom'; // Only if using React Router

const Navbar = () => {
    return (
        <nav className="bg-black text-white fixed w-full left-0 right-0">
            <div className="container mx-auto px-4 py-2 flex justify-between items-center">
                <div className="flex items-center">
                    <img src="/src/Component/photoes/it.png" alt="Logo" className="h-10" />
                    <span className="ml-2 text-xl font-bold">ityaTech</span>
                </div>
                <ul className="flex space-x-6">
                    <li>
                        <Link to="/" className="hover:text-gray-400">Home</Link>
                    </li>
                    <li>
                        <Link to="/about" className="hover:text-gray-400">About</Link>
                    </li>
                    <li>
                        <Link to="/contact" className="hover:text-gray-400">Contact</Link>
                    </li>
                    <li>
                        <Link to="/Blog" className="hover:text-gray-400">Blog</Link>
                    </li>
                    <li>
                        <Link to="/Skills" className="hover:text-gray-400">Skills</Link>
                    </li>
                </ul>
            </div>
        </nav>
    );
};

export default Navbar;