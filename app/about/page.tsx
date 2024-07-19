import React from 'react';
import Layout from '../layout';

const About: React.FC = () => {
    return (
        <Layout>
          <div className="container mx-auto px-4 py-16 pt-32">
            <h1 className="text-5xl font-bold mb-6 text-center bg-gradient-to-r from-blue-500 to-purple-600 text-transparent bg-clip-text">About Us</h1>
            <p className="mb-8 text-lg leading-relaxed text-gray-300 text-center max-w-2xl mx-auto animate-pulse">
              Monaarch is designed to be an invaluable resource for music composers, whether they are seasoned professionals or aspiring artists. We offer a range of powerful tools and services to support your creative process and help you achieve professional-quality results.
            </p>

            <div className="flex justify-center mb-12">
              <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full transition duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-110 shadow-lg">
                Join Our Community
              </button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-gray-800 p-6 rounded-lg shadow-xl transition duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-105">
                <h2 className="text-3xl font-semibold mb-2 text-gradient-to-r from-green-400 to-blue-500">Mixing and Mastering</h2>
                <p className="mb-4">
                  Our state-of-the-art mixing and mastering services ensure that your music sounds polished and ready for any platform. We provide professional-grade tools that allow you to refine your tracks and bring out the best in your compositions.
                </p>
              </div>
              <div className="bg-gray-800 p-6 rounded-lg shadow-xl transition duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-105">
                <h2 className="text-3xl font-semibold mb-2 text-gradient-to-r from-red-500 to-yellow-500">Music Splitter</h2>
                <p className="mb-4">
                  With our music splitter, you can easily separate different elements of your tracks, such as vocals and instruments. This feature is perfect for remixing, sampling, or simply analyzing different parts of your music in isolation.
                </p>
              </div>
              <div className="bg-gray-800 p-6 rounded-lg shadow-xl transition duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-105">
                <h2 className="text-3xl font-semibold mb-2 text-gradient-to-r from-purple-500 to-pink-500">Chord Finder</h2>
                <p className="mb-4">
                  Our chord finder tool helps you discover the perfect chords for your compositions. Whether you're looking for inspiration or need to identify the chords in a piece of music, this tool provides instant, accurate results.
                </p>
              </div>
              <div className="bg-gray-800 p-6 rounded-lg shadow-xl transition duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-105">
                <h2 className="text-3xl font-semibold mb-2">Download Services</h2>
                <p className="mb-4">
                  We offer convenient download options for all your music projects. Save your work in high-quality formats, ensuring that your compositions are ready for sharing or further production.
                </p>
              </div>
            </div>

            <h2 className="text-4xl font-semibold my-8 text-center">Our Team</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-12">
                    {[
                        { id: 1, name: "John Doe", role: "Founder & CEO", experience: "15 years" },
                        { id: 2, name: "Jane Smith", role: "Head of Marketing", experience: "10 years" },
                        { id: 3, name: "Alice Johnson", role: "Lead Developer", experience: "8 years" }
                    ].map(member => (
                        <div key={member.id} className="bg-gray-800 p-6 rounded-lg shadow-lg transform hover:scale-105 transition duration-300">
                            <h3 className="text-xl text-white font-bold">{member.name}</h3>
                            <p className="text-md text-gray-300">{member.role}</p>
                            <p className="text-md text-gray-300">{member.experience}</p>
                        </div>
                    ))}
                </div>

                <h2 className="text-4xl font-semibold my-8 text-center">Contact Us</h2>
                <div className="max-w-lg mx-auto bg-gray-800 p-6 rounded-lg shadow-lg">
                    <form>
                        <div className="mb-4">
                            <label className="block text-gray-300 text-sm font-bold mb-2" htmlFor="name">Name</label>
                            <input type="text" id="name" placeholder="Your Name" className="w-full p-2 rounded text-gray-700"/>
                        </div>
                        <div className="mb-4">
                            <label className="block text-gray-300 text-sm font-bold mb-2" htmlFor="email">Email</label>
                            <input type="email" id="email" placeholder="Your Email" className="w-full p-2 rounded text-gray-700"/>
                        </div>
                        <div className="mb-6">
                            <label className="block text-gray-300 text-sm font-bold mb-2" htmlFor="message">Message</label>
                            <textarea id="message" rows={4} placeholder="Your Message" className="w-full p-2 rounded text-gray-700"></textarea>
                        </div>
                        <div className="flex justify-center">
                            <button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded transition duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-110">Send Message</button>
                        </div>
                    </form>
                </div>
            </div>
        </Layout>
    );
};

export default About;
