import React, { useState, useEffect } from 'react';
import { Sun, Moon, X } from 'lucide-react';

const Notify = ({
  notificationDuration = 6900,
}) => {
  const [showNotification, setShowNotification] = useState(true);
  const [theme, setTheme] = useState(localStorage.getItem("theme") || "light");

  useEffect(() => {
    const notificationTimer = setTimeout(() => {
      setShowNotification(false);
    }, notificationDuration);

    return () => {
      clearTimeout(notificationTimer);
    };
  }, [notificationDuration]);

  useEffect(() => {
    const handleThemeChange = () => {
      const currentTheme = localStorage.getItem("theme") || "light";
      setTheme(currentTheme);
    };

    window.addEventListener("storage", handleThemeChange);

    return () => {
      window.removeEventListener("storage", handleThemeChange);
    };
  }, []);

  return (
    <>
      {showNotification && (
        <div
          className="fixed bottom-16 right-8 left-8 sm:left-auto bg-white dark:bg-gray-800 text-gray-800 dark:text-gray-200 px-6 py-4 rounded-lg shadow-lg flex items-center gap-4 transition-transform duration-500 z-50 animate-slide-up"
          role="alert"
          aria-live="polite"
        >
          <div className="p-2 bg-blue-600 text-white rounded-full flex items-center justify-center">
            {theme === 'dark' ? <Sun className="h-6 w-6" aria-hidden="true" /> : <Moon className="h-6 w-6" aria-hidden="true" />}
          </div>
          <div className="flex-1">
            <p className="text-sm font-medium">Did you know?</p>
            <p className="text-xs">
              Toggle the {theme === 'dark' ? 'sun' : 'moon'} icon at the top right corner for light/dark mode.
            </p>
          </div>
          <button
            className="text-gray-500 hover:text-gray-700 dark:hover:text-gray-300"
            onClick={() => setShowNotification(false)}
            aria-label="Dismiss notification"
          >
            <X className="h-4 w-4" />
          </button>
        </div>
      )}
    </>
  );
};

export default Notify;