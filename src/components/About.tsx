import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Coffee, Music, MapPin, Heart } from "lucide-react";
import { aboutMe } from "../data/personalData";

const About: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const icons = [
    <Coffee className="w-6 h-6" />,
    <MapPin className="w-6 h-6" />,
    <Music className="w-6 h-6" />,
    <Heart className="w-6 h-6" />,
  ];

  return (
    <section id="about" className="py-20 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            About Me
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto mb-8"></div>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Bio Section */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-6"
          >
            <div className="prose prose-lg dark:prose-invert max-w-none">
              {aboutMe.introduction.map((paragraph, index) => (
                <p
                  key={index}
                  className="text-gray-600 dark:text-gray-300 leading-relaxed"
                >
                  {paragraph}
                </p>
              ))}
            </div>
          </motion.div>

          {/* Quirky Facts */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="space-y-6"
          >
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-8">
              Fun Facts About Me
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {aboutMe.quirkyFacts.map((fact, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={inView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ duration: 0.5, delay: 0.5 + index * 0.1 }}
                  whileHover={{ scale: 1.05 }}
                  className="group p-4 bg-gray-50 dark:bg-gray-800 rounded-2xl hover:shadow-lg transition-all duration-300 cursor-pointer"
                >
                  <div className="flex items-center space-x-3">
                    <div
                      className={`p-2 rounded-full bg-gradient-to-r ${fact.color} text-white group-hover:scale-110 transition-transform`}
                    >
                      <fact.Icon />
                    </div>
                    <p className="text-gray-700 dark:text-gray-300 font-medium">
                      {fact.text}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Interactive Quote */}
            {/* <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="mt-8 p-6 bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20 rounded-2xl border-l-4 border-blue-500"
            >
              <blockquote className="text-lg italic text-gray-700 dark:text-gray-300">
                "{aboutMe.quote}"
              </blockquote>
              <p className="text-sm text-gray-500 dark:text-gray-400 mt-2">
                - {aboutMe.quoteAuthor}
              </p>
            </motion.div> */}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
