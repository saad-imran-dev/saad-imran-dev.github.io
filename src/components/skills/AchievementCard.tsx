import React from 'react';
import { motion } from 'framer-motion';

interface AchievementCardProps {
  number: string;
  label: string;
  index: number;
  inView: boolean;
}

const AchievementCard: React.FC<AchievementCardProps> = ({ number, label, index, inView }) => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.5 }}
      animate={inView ? { opacity: 1, scale: 1 } : {}}
      transition={{ duration: 0.8, delay: 1 + index * 0.2 }}
      whileHover={{ scale: 1.05 }}
      className="text-center p-6 bg-gray-50 dark:bg-gray-800 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-200 dark:border-gray-700"
    >
      <motion.div
        initial={{ scale: 0 }}
        animate={inView ? { scale: 1 } : {}}
        transition={{ duration: 0.8, delay: 1.2 + index * 0.2 }}
        className="text-4xl font-bold text-transparent bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text mb-2"
      >
        {number}
      </motion.div>
      <p className="text-gray-600 dark:text-gray-300 font-medium">{label}</p>
    </motion.div>
  );
};

export default AchievementCard;