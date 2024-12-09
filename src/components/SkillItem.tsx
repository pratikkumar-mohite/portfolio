import React from 'react';
import { motion } from 'framer-motion';

interface SkillItemProps {
  name: string;
  logo: string;
  isHovered: boolean;
}

const SkillItem: React.FC<SkillItemProps> = ({ name, logo, isHovered }) => {
  return (
    <div
      className={`p-3 rounded-lg transition-all duration-300 ${
        isHovered
          ? 'bg-blue-50 dark:bg-blue-900/20 transform hover:scale-105'
          : 'bg-gray-50 dark:bg-gray-700/50'
      }`}
    >
      <div className="flex items-center space-x-2">
        <img src={logo} alt={name} className="w-5 h-5 object-contain" />
        <span className="text-gray-700 dark:text-gray-300">{name}</span>
      </div>
    </div>
  );
};

export default SkillItem;