import React from 'react';
import { GrFormNextLink } from "react-icons/gr";
import { GoEye } from "react-icons/go";
import { FaRegHeart } from "react-icons/fa";

const Card = ({ category, title, date, image }) => {
    return (
        <div className="bg-black text-white p-4 rounded-lg shadow-md inline">
            <img src={image} alt={title} className="rounded-md w-full h-50 object-cover" />
            <div className="p-4 ">
                <div className='flex gap-3 '>
                    <div className="text-gray-400 text-xs uppercase mt-1">{date}</div>
                    <div className="text-gray-400 text-sm mb-3 underline"><span className='text-gray-400'>|</span> {category}</div>
                </div>
                <h2 className="text-xl font-semibold text-green-500">{title}</h2>
                <p className="mt-2">Lorem ipsum dolor sit amet consectetur. Turpis iaculis nibh dui ultrices amet pretium non non faucibus. Vitae at pulvinar netus eget orci.</p>
                <div className='flex'>
                    <div>
                        <p className='text-green-500 cursor-pointer'>Read more  </p>
                    </div>
                    <div className='mt-1.5 px-2 text-green-500 cursor-pointer'>
                        < GrFormNextLink />
                    </div>

                </div>
                <div className="flex justify-between items-center mt-4">
                    <div className="flex items-center space-x-2">
                        <img src="https://via.placeholder.com/32" alt="Profile" className="w-8 h-8 rounded-full" />
                        <div>
                            <div className="text-sm">Bhaumik Kore</div>
                            <div className="text-xs text-gray-400">Full Stack Developer</div>
                        </div>
                    </div>
                    <div className="flex space-x-2 text-gray-400 gap-5">
                        <div className='flex'>
                            <span className='mt-1 mx-1'><GoEye /></span>
                            <span >  17</span>
                        </div>
                        <div className='flex'>
                            <span className='mt-1 mx-1' ><FaRegHeart /></span>
                            <span className=''>22</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Card;
