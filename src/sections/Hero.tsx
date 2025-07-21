'use client';

import Image from 'next/image';
import Link from 'next/link';

const Hero = () => {
  return (
    <section id="hero" className="min-h-screen flex items-center py-20 bg-gradient-to-b from-white to-gray-100 dark:from-gray-900 dark:to-gray-800">
      <div className="container mx-auto px-4 grid md:grid-cols-2 gap-8 items-center">
        <div className="order-2 md:order-1">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 text-gray-800 dark:text-white">
            <span className="text-blue-600 dark:text-blue-400">Hamza Allaa</span>
          </h1>
          <h2 className="text-2xl md:text-3xl font-semibold mb-6 text-gray-700 dark:text-gray-300">
            Senior Full Stack Developer
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 mb-8 max-w-lg">
            I am a skilled web developer with strong analytical and problem-solving abilities. As a team leader,
            I manage and contribute to diverse web development projects, specializing in creating efficient,
            scalable, and user-friendly applications.
          </p>
          <div className="flex flex-wrap gap-4">
            <Link 
              href="#contact" 
              className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-medium"
            >
              Contact Me
            </Link>
            <Link 
              href="#experience" 
              className="px-6 py-3 border border-blue-600 text-blue-600 dark:text-blue-400 dark:border-blue-400 rounded-lg hover:bg-blue-50 dark:hover:bg-gray-800 transition-colors font-medium"
            >
              View Experience
            </Link>
          </div>
        </div>
        <div className="order-1 md:order-2 flex justify-center">
          <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-blue-600 dark:border-blue-400 shadow-xl">
            <Image 
              src="/images/profile.svg" 
              alt="Hamza Allaa" 
              fill
              className="object-cover"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;