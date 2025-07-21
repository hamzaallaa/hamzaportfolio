'use client';

import { FaGraduationCap, FaCalendarAlt, FaUniversity } from 'react-icons/fa';

interface Education {
  id: number;
  degree: string;
  field: string;
  institution: string;
  location: string;
  period: string;
  details?: string;
}

const Education = () => {
  const educationList: Education[] = [
    {
      id: 1,
      degree: "Master's Degree",
      field: "Computer Engineering, Artificial Intelligence, and Big Data",
      institution: "Superior School of Technology, Kenitra, Ibn Tofail",
      location: "Kenitra, Morocco",
      period: "2024 - Present",
      details: "ISTA OULED TEIMA, OULED TEIMA"
    },
    {
      id: 2,
      degree: "Diploma in Development",
      field: "Specialized Technician in Computer Development",
      institution: "ISTA OULED TEIMA",
      location: "OULED TEIMA, Morocco",
      period: "2018 - 2020"
    },
    {
      id: 3,
      degree: "Bachelor's degree",
      field: "Fundamental Sciences - Physics",
      institution: "Polydisciplinary Faculty of Taroudant, Arraï ait melloul",
      location: "Taroudant, Morocco",
      period: "2015 - 2018"
    },
    {
      id: 4,
      degree: "Baccalaureate",
      field: "",
      institution: "sidi ou sidi, taroudant",
      location: "Taroudant, Morocco",
      period: "2015 - 2015"
    }
  ];

  return (
    <section id="education" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-12 text-center text-gray-800 dark:text-white">
          <span className="text-blue-600 dark:text-blue-400">Education</span>
        </h2>

        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 h-full w-1 bg-blue-200 dark:bg-blue-900"></div>

          {/* Education Items */}
          <div className="space-y-12">
            {educationList.map((edu, index) => (
              <div key={edu.id} className={`relative flex flex-col md:flex-row ${index % 2 === 0 ? 'md:flex-row-reverse' : ''}`}>
                {/* Timeline Dot */}
                <div className="absolute left-0 md:left-1/2 transform -translate-x-1/2 w-6 h-6 rounded-full bg-blue-600 dark:bg-blue-400 z-10 flex items-center justify-center">
                  <div className="w-3 h-3 rounded-full bg-white dark:bg-gray-800"></div>
                </div>

                {/* Content */}
                <div className={`ml-10 md:ml-0 md:w-1/2 ${index % 2 === 0 ? 'md:pr-16' : 'md:pl-16'}`}>
                  <div className="bg-white dark:bg-gray-900 p-6 rounded-lg shadow-md">
                    <div className="flex items-center mb-2">
                      <FaGraduationCap className="text-blue-600 dark:text-blue-400 mr-2" />
                      <h3 className="text-xl font-bold text-gray-800 dark:text-white">{edu.degree}</h3>
                    </div>
                    
                    {edu.field && (
                      <p className="text-gray-700 dark:text-gray-300 mb-3">{edu.field}</p>
                    )}
                    
                    <div className="flex items-center mb-2">
                      <FaUniversity className="text-gray-500 dark:text-gray-400 mr-2" />
                      <p className="text-gray-600 dark:text-gray-400">{edu.institution}</p>
                    </div>
                    
                    <div className="flex items-center">
                      <FaCalendarAlt className="text-gray-500 dark:text-gray-400 mr-2" />
                      <p className="text-gray-600 dark:text-gray-400">{edu.period}</p>
                    </div>
                    
                    {edu.details && (
                      <p className="mt-3 text-gray-600 dark:text-gray-400 text-sm">{edu.details}</p>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;