import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { GraduationCap, Calendar, Award, BookOpen } from "lucide-react";
import { education, certifications } from "../data/educationData";

const Education = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section id="education" className="py-20 bg-gray-900">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-white mb-4">
            🎓 Education
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            My academic journey and continuous learning path
          </p>
        </motion.div>

        <div className="grid md:grid-cols-1 gap-8">
          {/* Education */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-6"
          >
            <h3 className="text-2xl font-bold text-white mb-6 flex items-center">
              <GraduationCap className="mr-3 text-blue-400" />
              Education
            </h3>

            {education.map((edu, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
                className="bg-gray-800 rounded-xl p-6 border border-gray-700 hover:border-blue-500 transition-all duration-300"
              >
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h4 className="text-xl font-semibold text-white mb-2">
                      {edu.degree}
                    </h4>
                    <p className="text-blue-400 font-medium mb-2">
                      {edu.institution}
                    </p>
                    <div className="flex items-center text-gray-400 mb-2">
                      <Calendar className="w-4 h-4 mr-2" />
                      {edu.period}
                    </div>
                    {edu.gpa && (
                      <div className="flex items-center text-gray-400">
                        <Award className="w-4 h-4 mr-2" />
                        CGPA: {edu.gpa}
                      </div>
                    )}
                  </div>
                </div>

                {/* {edu.coursework && (
                  <div className="mt-4">
                    <h5 className="text-sm font-semibold text-gray-300 mb-2">
                      Relevant Coursework:
                    </h5>
                    <div className="flex flex-wrap gap-2">
                      {edu.coursework.map((course, courseIndex) => (
                        <span
                          key={courseIndex}
                          className="px-3 py-1 bg-gray-700 text-gray-300 rounded-full text-sm"
                        >
                          {course}
                        </span>
                      ))}
                    </div>
                  </div>
                )} */}
              </motion.div>
            ))}
          </motion.div>

          {/* Add Certifications if any */}
          {/* Certifications  */}
          {/* <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="space-y-6"
          >
            <h3 className="text-2xl font-bold text-white mb-6 flex items-center">
              <BookOpen className="mr-3 text-green-400" />
              Certifications & Achievements
            </h3>
          </motion.div> */}
        </div>
      </div>
    </section>
  );
};

export default Education;
