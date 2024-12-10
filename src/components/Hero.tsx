import React from 'react';
import { Github, Linkedin, Twitter, ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';
import profileImage from '../assets/profile.jpg';

const Hero: React.FC = () => {
  return (
    <section id="home" className="min-h-screen pt-20 flex items-center bg-gradient-to-br from-indigo-50 via-white to-indigo-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
      <div className="container mx-auto px-6 flex flex-col md:flex-row items-center justify-between">
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="md:w-1/2 space-y-6"
        >
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-xl text-indigo-600 dark:text-indigo-400 font-medium"
          >
             <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-gray-300 mb-4">
              Hi, I'm <span className="text-blue-600">Pratikkumar Mohite</span>
            </h1>
          </motion.span>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 mb-8"
          >
            Senior Cloud DevOps Engineer
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-lg text-gray-600 dark:text-gray-300"
          >
            Specializing in cloud infrastructure automation, CI/CD pipelines, and scalable system architecture. 
            Passionate about optimizing deployments and building reliable systems at scale.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="flex space-x-4"
          >
              <a
                href="https://github.com/pratikkumar-mohite"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 bg-gray-800 text-white rounded-full hover:bg-gray-700 transition-colors"
              >
                <Github size={24} />
              </a>
              <a
                href="https://linkedin.com/in/pratikkumar-mohite"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition-colors"
              >
                <Linkedin size={24} />
              </a>
              <a
                href="https://twitter.com/DotSlashMohite"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 bg-blue-400 text-white rounded-full hover:bg-blue-500 transition-colors"
              >
                <Twitter size={24} />
              </a>
          </motion.div>
          <motion.div className="flex space-x-4">
              <a
                href="https://topmate.io/pratikkumar_mohite/"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-blue-600 text-white px-6 py-3 rounded-lg flex items-center space-x-2 hover:bg-blue-700 transition-colors"
              >
                <span>Book Meeting</span>
                <ArrowRight size={20} />
              </a>
              <a
                href="#contact"
                className="border border-blue-600 text-blue-600 px-6 py-3 rounded-lg hover:bg-blue-50 transition-colors"
              >
                Get in touch
              </a>
            </motion.div>
        </motion.div>
        <motion.div 
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="md:w-1/2 mt-12 md:mt-0 flex justify-center"
        >
          <div className="relative">
            <div className="absolute -inset-4 bg-indigo-500/20 dark:bg-indigo-500/10 rounded-full blur-2xl" />
            <img
              src={profileImage}
              alt="Profile"
              className="relative rounded-full w-80 h-80 object-cover shadow-xl ring-4 ring-indigo-100 dark:ring-indigo-900"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;