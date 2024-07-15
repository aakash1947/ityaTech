import React from 'react'

const Home = () => {
    return (
        <div className="min-h-screen bg-gray-100">


            {/* Hero Section */}
            <section className="bg-blue-600 text-white py-20">
                <div className="container mx-auto px-4 text-center">
                    <h1 className="text-4xl font-bold mb-4">Begin gaining professional experience and building your network even before you graduate.</h1>
                    <p className="text-lg mb-8">Innovative solutions for a digital world.</p>
                    <a href="#services" className="bg-white text-blue-600 py-2 px-4 rounded">Our Services</a>
                </div>
            </section>



            {/* Services */}
            <section id="services" className="bg-gray-200 py-20">
                <div className="container mx-auto px-4">
                    <h2 className="text-3xl font-bold mb-4 text-center">Our Services</h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        <div className="bg-white p-6 rounded shadow">
                            <h3 className="text-xl font-bold mb-2">Web Development</h3>
                            <p className="text-gray-700">Creating responsive and robust websites.</p>
                        </div>
                        <div className="bg-white p-6 rounded shadow">
                            <h3 className="text-xl font-bold mb-2">Mobile Apps</h3>
                            <p className="text-gray-700">Developing user-friendly mobile applications.</p>
                        </div>
                        <div className="bg-white p-6 rounded shadow">
                            <h3 className="text-xl font-bold mb-2">Cloud Solutions</h3>
                            <p className="text-gray-700">Offering scalable cloud-based solutions.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Contact */}
            <section id="contact" className="py-20">
                <div className="container mx-auto px-4">
                    <h2 className="text-3xl font-bold mb-4 text-center">Contact Us</h2>
                    <p className="text-gray-700 text-center mb-8">Get in touch with us for more information or to discuss your project needs.</p>
                    <div className="flex justify-center">
                        <form className="w-full max-w-lg bg-white p-8 rounded shadow">
                            <div className="mb-4">
                                <label className="block text-gray-700 mb-2" htmlFor="name">Name</label>
                                <input className="w-full px-3 py-2 border rounded" type="text" id="name" />
                            </div>
                            <div className="mb-4">
                                <label className="block text-gray-700 mb-2" htmlFor="email">Email</label>
                                <input className="w-full px-3 py-2 border rounded" type="email" id="email" />
                            </div>
                            <div className="mb-4">
                                <label className="block text-gray-700 mb-2" htmlFor="message">Message</label>
                                <textarea className="w-full px-3 py-2 border rounded" id="message" rows="4"></textarea>
                            </div>
                            <button className="w-full bg-blue-600 text-white py-2 px-4 rounded">Send Message</button>
                        </form>
                    </div>
                </div>
            </section>

            {/* Footer */}
            <footer className="bg-gray-800 text-white py-6">
                <div className="container mx-auto px-4 text-center">
                    &copy; 2024 Itya Software. All rights reserved.
                </div>
            </footer>
        </div>
    )
}

export default Home
