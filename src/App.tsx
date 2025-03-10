import { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Projects from './pages/Projects';
import About from './pages/About';
import Contact from './pages/Contact';
import Notify from './components/Notify';

function App() {
  // Initialize theme state with localStorage value (default to 'light' if none is found)
  const storedTheme = localStorage.getItem('theme');
  const [theme, setTheme] = useState<string>(storedTheme ? storedTheme : 'light');

  // Update the document class whenever the theme changes
  useEffect(() => {
    document.documentElement.classList.toggle('dark', theme === 'dark');
    localStorage.setItem('theme', theme); // Save the theme preference to localStorage
  }, [theme]);

  // Toggle between light and dark themes
  const toggleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
  };

  return (
    <Router>
      <div className="min-h-screen bg-gray-50">
        <Navbar toggleTheme={toggleTheme} isDarkMode={theme === 'dark'} />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
        <Notify />
      </div>
    </Router>
  );
}

export default App;
