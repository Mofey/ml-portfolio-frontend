import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { portfolioImage } from '../data/data'

// Continuous animated background blob component
const AnimatedBlob = () => (
  <motion.svg
    className="absolute top-0 left-0 w-full h-full z-0"
    viewBox="0 0 600 600"
    initial={{ scale: 1, rotate: 0 }}
    animate={{ scale: [1, 1.15, 1], rotate: [0, 360] }}
    transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
  >
    <defs>
      <linearGradient id="gradient" x1="0" y1="0" x2="1" y2="1">
        <stop offset="0%" stopColor="var(--gradient-start)" />
        <stop offset="100%" stopColor="var(--gradient-end)" />
      </linearGradient>
    </defs>
    <path
      fill="url(#gradient)"
      d="M300,50C400,50,500,150,500,250C500,350,400,450,300,450C200,450,100,350,100,250C100,150,200,50,300,50Z"
    />
  </motion.svg>
);

// Floating circles for additional background animation
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

const Home = () => {
  return (
    <div className="relative min-h-screen bg-gradient-to-br from-indigo-50 via-purple-50 to-pink-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-700 overflow-hidden transition-colors duration-500">
      {/* Background Animations */}
      <AnimatedBlob />
      <FloatingCircles />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32">
        {/* Hero Section */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-12">
          {/* Text Section */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="flex-1 text-center md:text-left"
          >
            <h1 className="text-5xl md:text-6xl font-extrabold text-gray-900 dark:text-white mb-6 tracking-wide">
              Mofetoluwa Balogun
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 mb-8 max-w-xl mx-auto md:mx-0">
              Machine Learner & Accountant – Bridging Financial Expertise with Cutting-Edge Machine Learning.
            </p>
            <Link
              to="/projects"
              className="inline-flex items-center px-8 py-3 border border-transparent text-base font-medium rounded-full text-white bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 dark:from-blue-400 dark:to-purple-400 transition-colors duration-300 shadow-lg"
            >
              View My Projects
              <ArrowRight className="ml-2" size={20} />
            </Link>
          </motion.div>

          {/* Profile Image Section with Extremely Slow Continuous Bouncing */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="flex-1 flex justify-center"
          >
            <motion.div
              animate={{ y: [0, -20, 0] }}
              transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
              className="z-20"
            >
              <motion.img
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
                src= { portfolioImage }
                alt="Mofetoluwa Balogun"
                className="w-64 h-64 md:w-80 md:h-80 object-cover rounded-full border-4 border-white shadow-2xl"
              />
            </motion.div>
          </motion.div>
        </div>

        {/* Info Cards */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.8 }}
          className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg transform transition hover:scale-105">
            <h3 className="text-xl font-bold mb-2 dark:text-white">Financial Expertise</h3>
            <p className="text-gray-600 dark:text-gray-300">
              Leveraging a robust accounting background to provide unique financial insights.
            </p>
          </div>
          <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg transform transition hover:scale-105">
            <h3 className="text-xl font-bold mb-2 dark:text-white">Machine Learning</h3>
            <p className="text-gray-600 dark:text-gray-300">
              Designing intelligent systems that address complex, real-world challenges.
            </p>
          </div>
          <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg transform transition hover:scale-105">
            <h3 className="text-xl font-bold mb-2 dark:text-white">Full Stack Development</h3>
            <p className="text-gray-600 dark:text-gray-300">
              Crafting end-to-end solutions with the latest technologies and design principles.
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Home;
