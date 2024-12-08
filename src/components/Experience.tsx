import React, { useState } from 'react';
import { experiences, education } from '../data/content';
import { Briefcase, GraduationCap } from 'lucide-react';
import { motion } from 'framer-motion';

const Experience: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'work' | 'education'>('work');

  return (
    <section id="experience" className="py-20 bg-gray-50 dark:bg-gray-800 ">
      <div className="container mx-auto px-6">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-3xl font-bold text-gray-800 dark:text-white mb-8"
        >
          Career Highlights
        </motion.h2>
        
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="flex space-x-4 mb-8"
        >
          <button
            className={`flex items-center px-4 py-2 rounded-lg ${
              activeTab === 'work'
                ? 'bg-blue-600 text-white'
                : 'bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300'
            }`}
            onClick={() => setActiveTab('work')}
          >
            <Briefcase className="w-5 h-5 mr-2" />
            Work Experience
          </button>
          <button
            className={`flex items-center px-4 py-2 rounded-lg ${
              activeTab === 'education'
                ? 'bg-blue-600 text-white'
                : 'bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300'
            }`}
            onClick={() => setActiveTab('education')}
          >
            <GraduationCap className="w-5 h-5 mr-2" />
            Education
          </button>
        </motion.div>

        <div className="relative">
          {activeTab === 'work' ? (
            <div className="space-y-8">
              {experiences.map((exp, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="relative pl-8 pb-8"
                >
                  <div className="absolute left-0 top-0 h-full w-0.5 bg-blue-600"></div>
                  <div className="absolute left-[-8px] top-0 w-4 h-4 rounded-full bg-blue-600"></div>
                  <div className="bg-white dark:bg-gray-900 p-6 rounded-lg shadow-md">
                    <h3 className="text-xl font-bold text-gray-800 dark:text-white">{exp.title}</h3>
                    <p className="text-blue-600 dark:text-blue-400">{exp.company}</p>
                    <p className="text-gray-600 dark:text-gray-400 text-sm mb-4">{exp.period}</p>
                    <ul className="list-disc list-inside space-y-2">
                      {exp.description.map((item, i) => (
                        <li key={i} className="text-gray-700 dark:text-gray-300">{item}</li>
                      ))}
                    </ul>
                  </div>
                </motion.div>
              ))}
            </div>
          ) : (
            <div className="space-y-8">
              {education.map((edu, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="relative pl-8 pb-8"
                >
                  <div className="absolute left-0 top-0 h-full w-0.5 bg-blue-600"></div>
                  <div className="absolute left-[-8px] top-0 w-4 h-4 rounded-full bg-blue-600"></div>
                  <div className="bg-white dark:bg-gray-900 p-6 rounded-lg shadow-md">
                    <h3 className="text-xl font-bold text-gray-800 dark:text-white">{edu.degree}</h3>
                    <p className="text-blue-600 dark:text-blue-400">{edu.institution}</p>
                    <p className="text-gray-600 dark:text-gray-400 text-sm mb-4">{edu.period}</p>
                    <p className="text-gray-700 dark:text-gray-300">{edu.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default Experience;