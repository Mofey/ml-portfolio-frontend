import { motion } from 'framer-motion';
import { skills, skillToUrlMap } from '../data/data';

const FloatingCircles = () => (
  <>
    <motion.div
      className="absolute rounded-full bg-white dark:bg-gray-700 z-0"
      style={{ width: 100, height: 100, top: "10%", left: "5%" }}
      animate={{ y: [0, -30, 0] }}
      transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
    />
    <motion.div
      className="absolute rounded-full bg-white dark:bg-gray-700 z-0"
      style={{ width: 150, height: 150, bottom: "10%", right: "5%" }}
      animate={{ y: [0, 30, 0] }}
      transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 1 }}
    />
    <motion.div
      className="absolute rounded-full bg-white dark:bg-gray-700 z-0"
      style={{ width: 80, height: 80, top: "50%", right: "20%" }}
      animate={{ y: [0, -20, 0] }}
      transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
    />
  </>
);

const About = () => {
  return (
    <div className="relative min-h-screen bg-gradient-to-br bg-gray-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-700 overflow-hidden transition-colors duration-500 pt-24 pb-12">
      <FloatingCircles />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-8">About Me</h2>
          
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-8 mb-8 relative z-20">
            <h3 className="text-2xl font-semibold mb-4 dark:text-white">Background</h3>
            <p className="text-gray-600 dark:text-gray-300 mb-6">
              I hold a Bachelor's degree in Accounting from the University of Lagos, Nigeria. My unique journey from finance to technology has equipped me with a distinctive perspective on solving business problems through software solutions. I combine my financial acumen with technical expertise to create innovative applications that bridge the gap between business and technology.
            </p>
            
            <h3 className="text-2xl font-semibold mb-4 dark:text-white">Professional Journey</h3>
            <p className="text-gray-600 dark:text-gray-300 mb-6">
              My experience spans financial analysis, business automation, and software development. I've worked on projects that leverage machine learning to solve complex business problems, particularly in areas where financial expertise intersects with technology. This includes developing predictive models for financial forecasting and creating automated systems for business process optimization.
            </p>

            <h3 className="text-2xl font-semibold mb-4 dark:text-white">Technical Skills</h3>
            <div className="flex flex-wrap gap-3 mb-8">
              {skills.map((skill) => (
                <a
                  key={skill}
                  href={skillToUrlMap[skill] || `https://www.google.com/search?q=${skill}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 rounded-full hover:bg-blue-200 dark:hover:bg-blue-800 transition-colors"
                >
                  {skill}
                </a>
              ))}
            </div>

            <h3 className="text-2xl font-semibold mb-4 dark:text-white">Philosophy</h3>
            <p className="text-gray-600 dark:text-gray-300">
              I believe in creating technology solutions that not only solve technical challenges but also deliver real business value. My background in accounting gives me a unique ability to understand both the technical and financial implications of software solutions, ensuring that the projects I work on are not just technically sound but also business-oriented.
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default About;