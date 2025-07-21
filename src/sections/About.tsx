'use client';

import { FaMapMarkerAlt, FaPhone, FaEnvelope, FaGithub, FaLinkedin } from 'react-icons/fa';

const About = () => {
  return (
    <section id="about" className="py-20 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-12 text-center text-gray-800 dark:text-white">
          About <span className="text-blue-600 dark:text-blue-400">Me</span>
        </h2>
        
        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <h3 className="text-2xl font-semibold mb-4 text-gray-800 dark:text-white">Profile</h3>
            <p className="text-gray-600 dark:text-gray-400 mb-6 leading-relaxed">
              I am a skilled web developer with strong analytical and problem-solving abilities. As a team leader,
              I manage and contribute to diverse web development projects, specializing in creating efficient,
              scalable, and user-friendly applications. Leveraging expertise in various programming languages and
              frameworks, I deliver innovative solutions while staying abreast of the latest industry trends to ensure
              optimal results.
            </p>
            
            <h3 className="text-2xl font-semibold mb-4 text-gray-800 dark:text-white">Languages</h3>
            <div className="space-y-2 mb-6">
              <div className="flex justify-between items-center">
                <span className="text-gray-700 dark:text-gray-300">English</span>
                <span className="text-gray-600 dark:text-gray-400">Intermediate</span>
              </div>
              <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2.5">
                <div className="bg-blue-600 dark:bg-blue-500 h-2.5 rounded-full" style={{ width: '60%' }}></div>
              </div>
              
              <div className="flex justify-between items-center mt-4">
                <span className="text-gray-700 dark:text-gray-300">French</span>
                <span className="text-gray-600 dark:text-gray-400">Medium</span>
              </div>
              <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2.5">
                <div className="bg-blue-600 dark:bg-blue-500 h-2.5 rounded-full" style={{ width: '75%' }}></div>
              </div>
              
              <div className="flex justify-between items-center mt-4">
                <span className="text-gray-700 dark:text-gray-300">Arabic</span>
                <span className="text-gray-600 dark:text-gray-400">Native</span>
              </div>
              <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2.5">
                <div className="bg-blue-600 dark:bg-blue-500 h-2.5 rounded-full" style={{ width: '100%' }}></div>
              </div>
            </div>
          </div>
          
          <div>
            <h3 className="text-2xl font-semibold mb-6 text-gray-800 dark:text-white">Contact Information</h3>
            <div className="space-y-4">
              <div className="flex items-center">
                <FaMapMarkerAlt className="text-blue-600 dark:text-blue-400 mr-3 text-xl" />
                <span className="text-gray-600 dark:text-gray-400">Casablanca, Morocco</span>
              </div>
              
              <div className="flex items-center">
                <FaPhone className="text-blue-600 dark:text-blue-400 mr-3 text-xl" />
                <span className="text-gray-600 dark:text-gray-400">+212689074519</span>
              </div>
              
              <div className="flex items-center">
                <FaEnvelope className="text-blue-600 dark:text-blue-400 mr-3 text-xl" />
                <a href="mailto:Hamzaallaa00@gmail.com" className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                  Hamzaallaa00@gmail.com
                </a>
              </div>
              
              <div className="flex items-center">
                <FaGithub className="text-blue-600 dark:text-blue-400 mr-3 text-xl" />
                <a href="https://github.com/hamzaallaa" target="_blank" rel="noopener noreferrer" className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                  github.com/hamzaallaa
                </a>
              </div>
              
              <div className="flex items-center">
                <FaLinkedin className="text-blue-600 dark:text-blue-400 mr-3 text-xl" />
                <a href="https://www.linkedin.com/in/hamza-allaa-6627b5196/" target="_blank" rel="noopener noreferrer" className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                  linkedin.com/in/hamza-allaa-6627b5196
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;