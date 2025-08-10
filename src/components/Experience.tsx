import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { MapPin, Calendar, ChevronRight } from 'lucide-react';
import { experiences } from '../data/experienceData';

const Experience: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });


  return (
    <section id="experience" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            Work Experience
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto mb-8"></div>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            My professional journey building digital solutions
          </p>
        </motion.div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-4 md:left-1/2 transform md:-translate-x-1/2 w-0.5 h-full bg-gradient-to-b from-blue-500 to-purple-600"></div>

          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                className={`relative flex items-center ${
                  index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                }`}
              >
                {/* Timeline dot */}
                <div className="absolute left-4 md:left-1/2 transform md:-translate-x-1/2 w-4 h-4 rounded-full bg-white dark:bg-gray-900 border-4 border-blue-500 z-10"></div>

                {/* Content */}
                <div className={`ml-12 md:ml-0 w-full md:w-1/2 ${
                  index % 2 === 0 ? 'md:pr-8' : 'md:pl-8'
                }`}>
                  <motion.div
                    whileHover={{ scale: 1.02 }}
                    className="bg-white dark:bg-gray-900 p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300"
                  >
                    <div className="flex items-start justify-between mb-4">
                      <div>
                        <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                          {exp.title}
                        </h3>
                        <p className="text-lg font-semibold text-transparent bg-gradient-to-r bg-clip-text from-blue-600 to-purple-600 mb-1">
                          {exp.company}
                        </p>
                        <div className="flex items-center text-sm text-gray-500 dark:text-gray-400 space-x-4">
                          <div className="flex items-center">
                            <MapPin size={16} className="mr-1" />
                            {exp.location}
                          </div>
                          <div className="flex items-center">
                            <Calendar size={16} className="mr-1" />
                            {exp.period}
                          </div>
                        </div>
                      </div>
                      <div className={`w-3 h-3 rounded-full bg-gradient-to-r ${exp.color}`}></div>
                    </div>

                    {/* <p className="text-gray-600 dark:text-gray-300 mb-4">
                      {exp.description}
                    </p> */}

                    <div className="space-y-2">
                      <h4 className="font-semibold text-gray-900 dark:text-white">
                        Key Achievements:
                      </h4>
                      {exp.achievements.map((achievement, i) => (
                        <motion.div
                          key={i}
                          initial={{ opacity: 0, x: -20 }}
                          animate={inView ? { opacity: 1, x: 0 } : {}}
                          transition={{ duration: 0.5, delay: (index * 0.2) + (i * 0.1) + 0.3 }}
                          className="flex items-start"
                        >
                          <ChevronRight size={16} className="text-blue-500 mr-2 mt-1 flex-shrink-0" />
                          <span className="text-sm text-gray-600 dark:text-gray-300">
                            {achievement}
                          </span>
                        </motion.div>
                      ))}
                    </div>
                  </motion.div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;