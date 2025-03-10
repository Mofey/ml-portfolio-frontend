interface ThemeToggleProps {
  toggleTheme: () => void;
  isDarkMode: boolean;
}

const ThemeToggle: React.FC<ThemeToggleProps> = ({ toggleTheme, isDarkMode }) => {
  return (
    <button onClick={toggleTheme} className="text-gray-600 dark:text-gray-300">
      {isDarkMode ? (
        <span>☀️</span> // Dark mode icon (e.g., moon)
      ) : (
        <span>🌙</span> // Light mode icon (e.g., sun)
      )}
    </button>
  );
};

export default ThemeToggle;
