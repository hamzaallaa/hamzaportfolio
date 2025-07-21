'use client';

import { FaCode, FaServer, FaDatabase, FaTools } from 'react-icons/fa';

interface SkillCategory {
  id: string;
  title: string;
  icon: React.ReactNode;
  skills: string[];
}

const Skills = () => {
  const skillCategories: SkillCategory[] = [
    {
      id: 'frontend',
      title: 'Frontend Development',
      icon: <FaCode className="text-3xl text-blue-600 dark:text-blue-400" />,
      skills: ['JavaScript', 'Vue.js', 'Nuxt.js', 'React', 'TypeScript', 'HTML', 'CSS', 'Sass', 'Tailwind CSS', 'Bootstrap']
    },
    {
      id: 'backend',
      title: 'Backend Development',
      icon: <FaServer className="text-3xl text-blue-600 dark:text-blue-400" />,
      skills: ['Node.js', 'Express.js', 'Nest.js', 'REST API', 'Socket.io', 'Laravel', 'PHP', 'Web Scraping']
    },
    {
      id: 'database',
      title: 'Database & Storage',
      icon: <FaDatabase className="text-3xl text-blue-600 dark:text-blue-400" />,
      skills: ['MongoDB', 'PostgreSQL', 'MySQL', 'Redis', 'Elasticsearch']
    },
    {
      id: 'tools',
      title: 'Tools & DevOps',
      icon: <FaTools className="text-3xl text-blue-600 dark:text-blue-400" />,
      skills: ['Git', 'GitHub Actions', 'CI/CD', 'Docker', 'AWS', 'Nginx', 'Jenkins', 'Puppeteer', 'Playwright', 'Electron']
    }
  ];

  return (
    <section id="skills" className="py-20 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-12 text-center text-gray-800 dark:text-white">
          Technical <span className="text-blue-600 dark:text-blue-400">Skills</span>
        </h2>

        <div className="grid md:grid-cols-2 gap-8">
          {skillCategories.map((category) => (
            <div key={category.id} className="bg-gray-50 dark:bg-gray-800 rounded-lg p-6 shadow-md">
              <div className="flex items-center mb-6">
                {category.icon}
                <h3 className="text-xl font-semibold ml-4 text-gray-800 dark:text-white">{category.title}</h3>
              </div>
              
              <div className="flex flex-wrap gap-3">
                {category.skills.map((skill, index) => (
                  <span 
                    key={index} 
                    className="px-4 py-2 bg-white dark:bg-gray-700 rounded-full text-gray-700 dark:text-gray-300 text-sm font-medium shadow-sm"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;