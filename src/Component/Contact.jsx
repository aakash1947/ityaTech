import React from 'react'

const Contact = () => {
    return (
        // <div>
        //     {/* Contact
        //     <section id="contact" className="py-20">
        //         <div className="container mx-auto px-4">
        //             <h2 className="text-3xl font-bold mb-4 text-center">Contact Us</h2>
        //             <p className="text-gray-700 text-center mb-8">Get in touch with us for more information or to discuss your project needs.</p>
        //             <div className="flex justify-center">
        //                 <form className="w-full max-w-lg bg-white p-8 rounded shadow">
        //                     <div className="mb-4">
        //                         <label className="block text-gray-700 mb-2" htmlFor="name">Name</label>
        //                         <input className="w-full px-3 py-2 border rounded" type="text" id="name" />
        //                     </div>
        //                     <div className="mb-4">
        //                         <label className="block text-gray-700 mb-2" htmlFor="email">Email</label>
        //                         <input className="w-full px-3 py-2 border rounded" type="email" id="email" />
        //                     </div>
        //                     <div className="mb-4">
        //                         <label className="block text-gray-700 mb-2" htmlFor="message">Message</label>
        //                         <textarea className="w-full px-3 py-2 border rounded" id="message" rows="4"></textarea>
        //                     </div>
        //                     <button className="w-full bg-blue-600 text-white py-2 px-4 rounded">Send Message</button>
        //                 </form>
        //             </div>
        //         </div>
        //     </section> */}
        // </div>

        <div className="min-h-screen bg-black text-white flex items-center justify-center p-4">
            <div className="bg-black rounded-lg shadow-lg p-8 flex flex-col md:flex-row  w-full">
                <div className="md:w-1/2 md:pr-8 mb-8 md:mb-0 px-40">
                    <h1 className="text-3xl font-semibold mb-4">Contact Us, We're Ready <br /> to Help!</h1>
                    <p className="mb-3">We strive to provide you with the best experience and the best <br /> platform to find <br /> your choice. <br /> Post us any queries and we'll get back to you.</p>
                    <div className="mb-4">
                        <p className="flex items-center mb-2">
                            <span className="material-icons mr-2">chat</span>
                            <span className="font-semibold">Chat with us !!</span>
                        </p>
                        <p className="text-blue-400">Our friendly team is here to help</p>
                        <p className="text-blue-400">to_let@gmail.com</p>
                    </div>
                    <div>
                        <p className="flex items-center mb-2">
                            <span className="material-icons mr-2">call</span>
                            <span className="font-semibold">Call us ...</span>
                        </p>
                        <p className="text-blue-400">Mon - Fri 8 am to 10 pm</p>
                        <p className="text-blue-400">+91 9876543210</p>
                    </div>
                </div>
                <div className="md:w-1/2 px-48 ">
                    <form className="space-y-4">
                        <div>
                            <label className="block text-gray-400">Topic</label>
                            <select className=" w-full p-2 rounded bg-gray-800 border border-gray-600 text-white">
                                <option>Select a topic</option>
                            </select>
                        </div>
                        <div>
                            <label className="block text-gray-400">Name</label>
                            <input type="text" className=" w-full p-2 rounded bg-gray-800 border border-gray-600 text-white" placeholder="johndoe" />
                        </div>
                        <div>
                            <label className="  block text-gray-400">Email</label>
                            <input type="email" className=" w-full p-2 rounded bg-gray-800 border border-gray-600 text-white" placeholder="name@provider.com" />
                        </div>
                        <div>
                            <label className="block text-gray-400">Message</label>
                            <textarea className=" w-full p-2 rounded bg-gray-800 border border-gray-600 text-white" placeholder="Type your message..."></textarea>
                        </div>
                        <button className="  bg-blue-500 text-white py-2 rounded">Submit Query</button>
                    </form>
                </div>
            </div>
        </div>
    );
};



export default Contact
