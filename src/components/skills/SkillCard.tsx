import React from "react";
import { motion } from "framer-motion";
import { SkillCategory } from "../../data/skillsData";

interface SkillCardProps {
  category: SkillCategory;
  index: number;
  inView: boolean;
}

const SkillCard: React.FC<SkillCardProps> = ({ category, index, inView }) => {
  const IconComponent = category.icon as unknown as React.ComponentType<{
    className?: string;
  }>;

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.8, delay: index * 0.1, ease: "easeOut" }}
      whileHover={{
        scale: 1.03,
        y: -5,
        transition: {
          type: "spring",
          stiffness: 300,
          damping: 20,
        },
      }}
      style={{ willChange: "transform" }}
      className="bg-gray-50 dark:bg-gray-800 p-6 rounded-2xl shadow-lg hover:shadow-2xl transition-shadow duration-200 border border-gray-200 dark:border-gray-700"
    >
      <div className="flex items-center mb-6">
        <motion.div
          whileHover={{
            rotate: 360,
            transition: {
              type: "spring",
              stiffness: 200,
              damping: 15,
            },
          }}
          className={`p-3 rounded-full bg-gradient-to-r ${category.color} text-white mr-4 shadow-lg`}
        >
          <IconComponent className="w-8 h-8" />
        </motion.div>
        <h3 className="text-xl font-bold text-gray-900 dark:text-white">
          {category.title}
        </h3>
      </div>

      <div className="space-y-4">
        <div className="flex flex-wrap gap-3">
          {category.skills.map((skill, skillIndex) => (
            <div
              key={skillIndex}
              className="space-y-2 px-3 py-1 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-full text-sm"
            >
              <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
                {skill.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default SkillCard;
