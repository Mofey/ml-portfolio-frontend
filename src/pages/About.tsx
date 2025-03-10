import { motion } from 'framer-motion';

const About = () => {
  const skills = [
    'Python', 'JavaScript/TypeScript', 'React', 'Node.js',
    'Machine Learning', 'SQL', 'Financial Analysis', 'Data Visualization'
  ];

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 pt-24 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-8">About Me</h2>
          
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-8 mb-8">
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
                <span
                  key={skill}
                  className="px-4 py-2 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 rounded-full"
                >
                  {skill}
                </span>
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