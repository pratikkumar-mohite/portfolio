import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';
import { motion } from 'framer-motion';
import { skills } from '../data/content';

const Skills: React.FC = () => {
  const [openCategories, setOpenCategories] = useState<Set<string>>(new Set());

  const firstHalf = skills.slice(0, Math.ceil(skills.length / 2));
  const secondHalf = skills.slice(Math.ceil(skills.length / 2));

  const toggleCategory = (category: string) => {
    setOpenCategories(prev => {
      const newSet = new Set(prev);
      if (newSet.has(category)) {
        newSet.delete(category);
      } else {
        newSet.add(category);
      }
      return newSet;
    });
  };

  const SkillColumn = ({ skillSet }: { skillSet: typeof skills }) => (
    <div className="space-y-4">
      {skillSet.map((skill, index) => (
        <motion.div
          key={skill.category}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: index * 0.1 }}
          viewport={{ once: true }}
          className="border dark:border-gray-700 rounded-lg overflow-hidden"
        >
          <button
            className="w-full p-4 flex justify-between items-center bg-gray-50 dark:bg-gray-800 hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
            onClick={() => toggleCategory(skill.category)}
          >
            <span className="font-semibold text-gray-700 dark:text-gray-300">{skill.category}</span>
            {openCategories.has(skill.category) ? (
              <ChevronUp className="w-5 h-5 text-gray-600 dark:text-gray-400" />
            ) : (
              <ChevronDown className="w-5 h-5 text-gray-600 dark:text-gray-400" />
            )}
          </button>
          {openCategories.has(skill.category) && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="p-4 bg-white dark:bg-gray-900"
            >
              <div className="grid grid-cols-2 gap-4">
                {skill.items.map((item) => (
                  <div
                    key={item}
                    className="flex items-center space-x-2 p-2 bg-indigo-50 dark:bg-indigo-900/20 rounded-lg hover:bg-indigo-100 dark:hover:bg-indigo-900/30 transition-colors"
                  >
                    <img
                      src={`https://raw.githubusercontent.com/devicons/devicon/master/icons/${item.toLowerCase()}/${item.toLowerCase()}-original.svg`}
                      alt={item}
                      className="w-6 h-6"
                      onError={(e) => {
                        e.currentTarget.src = `https://raw.githubusercontent.com/devicons/devicon/master/icons/${item.toLowerCase()}/${item.toLowerCase()}-plain.svg`;
                      }}
                    />
                    <span className="text-indigo-800 dark:text-indigo-200">{item}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          )}
        </motion.div>
      ))}
    </div>
  );

  return (
    <section id="skills" className="py-20 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-white to-gray-50 dark:from-gray-900 dark:to-gray-800 -z-10 " />
      <div className="container mx-auto px-6">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-3xl font-bold text-gray-800 dark:text-white mb-8 text-center"
        >
          Skills
        </motion.h2>
        <div className="grid md:grid-cols-2 gap-8">
          <SkillColumn skillSet={firstHalf} />
          <SkillColumn skillSet={secondHalf} />
        </div>
      </div>
    </section>
  );
};

export default Skills;