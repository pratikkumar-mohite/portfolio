import React, { useState } from 'react';
import { LucideIcon } from 'lucide-react';
import SkillItem from './SkillItem';

interface Skill {
  name: string;
  logo: string;
}

interface SkillCardProps {
  icon: LucideIcon;
  title: string;
  skills: Skill[];
}

const SkillCard: React.FC<SkillCardProps> = ({ icon: Icon, title, skills }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className="relative group bg-white dark:bg-gray-800 rounded-xl p-6 transition-all duration-300 hover:shadow-xl"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-indigo-500/10 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      
      <div className="relative">
        <div className="flex items-center mb-4">
          <div className="p-2 bg-blue-100 dark:bg-blue-900/30 rounded-lg">
            <Icon className="w-6 h-6 text-blue-600 dark:text-blue-400" />
          </div>
          <h3 className="ml-3 text-xl font-semibold text-gray-900 dark:text-white">
            {title}
          </h3>
        </div>

        <div className="grid grid-cols-2 gap-2">
          {skills.map((skill, index) => (
            <SkillItem
              key={index}
              name={skill.name}
              logo={skill.logo}
              isHovered={isHovered}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default SkillCard;