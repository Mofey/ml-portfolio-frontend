import { motion } from 'framer-motion';
import { Github } from 'lucide-react';
import { projects, tagToUrlMap } from '../data/data';

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

const Projects = () => {
  return (
    <div className="relative min-h-screen bg-gradient-to-br bg-gray-50 to-pink-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-700 overflow-hidden transition-colors duration-500 pt-24 pb-12">
      <FloatingCircles />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-8">Projects</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 ">
            {projects.map((project, index) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                className="bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden"
              >
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2 dark:text-white">{project.title}</h3>
                  <p className="text-gray-600 dark:text-gray-300 mb-4">{project.description}</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.map(tag => (
                      <a
                        key={tag}
                        href={tagToUrlMap[tag] || `https://www.google.com/search?q=${tag}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 rounded-full text-sm hover:bg-blue-200 dark:hover:bg-yellow-300 dark:hover:text-blue-900 transition-colors"
                      >
                        {tag}
                      </a>
                    ))}
                  </div>
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-yellow-300"
                  >
                    <Github size={20} className="mr-2" />
                    View on GitHub
                  </a>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Projects;