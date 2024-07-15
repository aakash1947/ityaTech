import React from 'react'

const About = () => {
    return (
        <div className="min-h-screen bg-gray-100">




            {/* About Us */}
            <section id="about" className="py-20 bg-white">
                <div className="container mx-auto px-4">
                    <h2 className="text-3xl font-bold mb-4 text-center">About Us</h2>
                    <div className="flex flex-col md:flex-row items-center md:space-x-8">
                        <div className="md:w-1/2 mb-6 md:mb-0">
                            <img src="https://via.placeholder.com/600x400" alt="About Us" className="rounded-lg shadow-lg" />
                        </div>
                        <div className="md:w-1/2">
                            <p className="text-gray-700 mb-4">Itya Software is a forward-thinking software development company committed to delivering innovative and efficient technology solutions. Our team of skilled professionals brings together expertise in various domains, including web development, mobile app development, and cloud computing.</p>
                            <p className="text-gray-700 mb-4">We pride ourselves on our collaborative approach, working closely with clients to understand their unique needs and deliver customized solutions that drive business success. Our mission is to empower businesses through technology, enabling them to achieve their goals and stay ahead in the competitive market.</p>
                            <p className="text-gray-700">At Itya Software, we value integrity, excellence, and customer satisfaction. We continuously strive to improve our services and embrace the latest technological advancements to provide the best possible outcomes for our clients.</p>
                        </div>
                    </div>
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



            {/* Footer */}
            <footer className="bg-gray-800 text-white py-6">
                <div className="container mx-auto px-4 text-center">
                    &copy; 2024 Itya Software. All rights reserved.
                </div>
            </footer>
        </div>
    )
}

export default About
