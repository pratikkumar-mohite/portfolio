import React from 'react';
import { motion } from 'framer-motion';
import { Award, BookOpen, Users, Mic } from 'lucide-react';

const stats = [
  { icon: Award, label: 'Projects Completed', value: '50+' },
  { icon: Users, label: 'Career Guidance Given', value: '100+' },
  { icon: BookOpen, label: 'Blog Posts', value: '25+' },
  { icon: Mic, label: 'Speaking Events', value: '15+' },
];

const About: React.FC = () => {
  return (
    <section id="about" className="py-20 bg-gradient-to-b from-indigo-50 to-white dark:from-gray-800 dark:to-gray-900">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto text-center mb-16"
        >
          <h2 className="text-3xl font-bold text-indigo-900 dark:text-indigo-300 mb-6">About Me</h2>
          <p className="text-lg text-gray-700 dark:text-gray-300 mb-8">
            As a Senior Cloud DevOps Engineer with over 5+ years of experience, I specialize in designing and implementing 
            scalable cloud infrastructure, automating deployment pipelines, and optimizing system performance. My passion 
            lies in sharing knowledge and helping others grow in the tech industry through mentoring and community engagement.
          </p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6 transform hover:scale-105 transition-transform"
            >
              <div className="flex flex-col items-center">
                <div className="p-3 bg-indigo-100 dark:bg-indigo-900 rounded-full mb-4">
                  <stat.icon className="w-6 h-6 text-indigo-600 dark:text-indigo-300" />
                </div>
                <h3 className="text-3xl font-bold text-indigo-600 dark:text-indigo-400 mb-2">{stat.value}</h3>
                <p className="text-sm text-gray-600 dark:text-gray-400 text-center">{stat.label}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;