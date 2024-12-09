import React from 'react';
import { motion } from 'framer-motion';
import SkillCard from './SkillCard.tsx';
import { skillsData } from '../data/content';

const Skills = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const cardVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
      },
    },
  };

  return (
    <section id="skills" className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <motion.h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Technical Skills
          </motion.h2>
          <motion.p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Specialized in modern DevOps practices, Cloud infrastructure, and Automation technologies.
          </motion.p>
        </div>

        <motion.div
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {skillsData.map((category, index) => (
            <motion.div key={index} variants={cardVariants}>
              <SkillCard
                icon={category.icon}
                title={category.title}
                skills={category.skills}
              />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;