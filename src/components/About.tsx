import React from 'react';
import { motion } from 'framer-motion';
import { Award, BookOpen, Users, Mic } from 'lucide-react';

const stats = [
  { icon: Award, label: 'Projects', value: '5+' },
  { icon: Users, label: 'Career Guidance', value: '20+' },
  { icon: Mic, label: 'Talks', value: '15+' },
];

const About: React.FC = () => {
  return (
    <section id="about" className="py-20 bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-gray-800 dark:to-gray-900">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">About Me</h2>
          <p className="text-gray-600 dark:text-gray-300 mx-auto text-lg">
            As a Senior Cloud DevOps Engineer with over 5+ years of experience, I specialize in designing and implementing 
            scalable cloud infrastructure, automating deployment pipelines, and optimizing system performance. Skilled in various 
            DevOps tools and technologies, knowledgeable in Cloud infrastructure, 
            well versed in Continuous Integration/Deployment and Infrastructure Management.
            My passion lies in sharing knowledge and helping others grow in the tech industry through mentoring and community engagement.
          </p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6 transform hover:scale-105 transition-transform"
            >
              <div className="flex flex-col items-center">
                <div className="p-3 bg-blue-100 dark:bg-blue-900/30 rounded-lg">
                  <stat.icon className="w-6 h-6 text-blue-600 dark:text-blue-400" />
                </div>
                <h3 className="ml-3 text-3xl font-semibold text-gray-900 dark:text-white">{stat.value}</h3>
                <p className="text-l text-gray-600 dark:text-gray-400 text-center">{stat.label}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;