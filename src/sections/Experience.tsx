'use client';

import { useState } from 'react';
import { FaBriefcase, FaCalendarAlt } from 'react-icons/fa';

interface Job {
  id: number;
  title: string;
  company: string;
  location: string;
  period: string;
  description: string[];
}

const Experience = () => {
  const jobs: Job[] = [
    {
      id: 1,
      title: 'Senior Full Stack Developer',
      company: 'AutoDealersDigital',
      location: 'Casablanca',
      period: '20/07/2022 - Present',
      description: [
        'Software Developer at AutoDealersDigital, a company that provides automotive dealership management software solutions in America and Canada.',
        'Developed CRM and inventory management systems using Node.js, Vue.js, and MongoDB.',
        'Designed and implemented scalable database structures to enhance performance.',
        'Built instant messaging solutions using Node.js, Socket.io, and Electron.',
        'Collaborated with cross-functional teams to ideate solutions and resolve technical errors efficiently.',
        'Automated Facebook and Craigslist Marketplace tasks using Puppeteer scripts for posting, updating, and monitoring items.',
        'Created dashboards enabling real-time post monitoring and control.',
        'Developed chatbots using Node.js, Python, and Electron.js for Facebook Marketplace to respond to leads automatically.',
        'Engineered desktop applications with automated updates.',
        'Optimized code and server requests, improving data retrieval efficiency and reducing load times.',
        'Added unit tests across all projects, automating execution with GitHub Actions.',
        'Implemented CI/CD pipelines using GitHub Actions and configured Nginx for efficient server management.',
        'Managed over 5,000 desktop applications via a centralized dashboard.',
        'Deployed web applications on AWS and configured Nginx for efficient server management.',
        'Applied Agile project management principles, specifically the Scrum framework, to ensure timely delivery of projects.'
      ]
    },
    {
      id: 2,
      title: 'Senior Full Stack Developer',
      company: 'Alikar',
      location: 'Casablanca',
      period: '08/02/2022 - 15/07/2022',
      description: [
        'Alikar is a service company that provides on-demand chauffeur services. The tasks to be carried out are:',
        'Finalized the first project version using Laravel, Vue.js, and MySQL.',
        'Led the development of a new version with Node.js, Vue.js, and MongoDB.',
        'Deployed web applications on AWS and configured Nginx.',
        'Development of a new version based on Vue.js, Node.js and MongoDB.',
        'Used Agile project management methodologies (Scrum).'
      ]
    },
    {
      id: 3,
      title: 'Web Developer',
      company: 'Storemo',
      location: 'Agadir',
      period: '10/10/2020 – 01/02/2022',
      description: [
        'Storemo is an e-commerce company that offers a platform for individuals and businesses to create and manage their own online stores. During my experience at Storemo, I had the following responsibilities and accomplishments:',
        'Developed a custom dynamic online store using Nuxt.js and Vue.js.',
        'Created a personalized checkout system with dynamic functionality.',
        'Built a stable core framework to handle API requests for future store development using Vue.js and Vuex.',
        'Implemented code modifications and bug fixes to improve overall functionality.',
        'Developed web applications integrated into the e-commerce system, with a particular focus on store applications.',
        'Successfully built a SMS application for delivery management using Node.js, MongoDB, and Vue.js.',
        'Utilized Jenkins and GitHub for version control and deployment when working with the server.',
        'Developed a web application to control a mobile application using Vue.js.',
        'Implemented Agile project management methodologies, specifically the Scrum framework.'
      ]
    }
  ];

  const [activeJobId, setActiveJobId] = useState(1);

  const activeJob = jobs.find(job => job.id === activeJobId) || jobs[0];

  return (
    <section id="experience" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-12 text-center text-gray-800 dark:text-white">
          Work <span className="text-blue-600 dark:text-blue-400">Experience</span>
        </h2>

        <div className="grid md:grid-cols-12 gap-8">
          {/* Job Selection Sidebar */}
          <div className="md:col-span-4 lg:col-span-3">
            <div className="bg-white dark:bg-gray-900 rounded-lg shadow-md overflow-hidden">
              {jobs.map((job) => (
                <button
                  key={job.id}
                  onClick={() => setActiveJobId(job.id)}
                  className={`w-full text-left px-6 py-4 border-l-4 transition-colors ${activeJobId === job.id
                    ? 'border-blue-600 bg-blue-50 dark:bg-gray-800 dark:border-blue-400'
                    : 'border-transparent hover:bg-gray-50 dark:hover:bg-gray-800'
                    }`}
                >
                  <h3 className={`font-medium ${activeJobId === job.id ? 'text-blue-600 dark:text-blue-400' : 'text-gray-700 dark:text-gray-300'}`}>
                    {job.company}
                  </h3>
                  <p className="text-sm text-gray-500 dark:text-gray-400">{job.title}</p>
                </button>
              ))}
            </div>
          </div>

          {/* Job Details */}
          <div className="md:col-span-8 lg:col-span-9">
            <div className="bg-white dark:bg-gray-900 rounded-lg shadow-md p-6">
              <div className="mb-6">
                <h3 className="text-2xl font-bold text-gray-800 dark:text-white mb-2">{activeJob.title}</h3>
                <div className="flex flex-wrap gap-4 mb-4">
                  <div className="flex items-center text-gray-600 dark:text-gray-400">
                    <FaBriefcase className="mr-2" />
                    <span>{activeJob.company}, {activeJob.location}</span>
                  </div>
                  <div className="flex items-center text-gray-600 dark:text-gray-400">
                    <FaCalendarAlt className="mr-2" />
                    <span>{activeJob.period}</span>
                  </div>
                </div>
              </div>

              <div className="space-y-4">
                {activeJob.description.map((item, index) => (
                  <div key={index} className="flex">
                    <div className="mr-4 mt-1">
                      <div className="h-2 w-2 rounded-full bg-blue-600 dark:bg-blue-400 mt-1.5"></div>
                    </div>
                    <p className="text-gray-600 dark:text-gray-400">{item}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;