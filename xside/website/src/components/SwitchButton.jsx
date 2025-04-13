import React, { useState, useEffect } from "react";
import { MoonIcon, SunIcon } from "@heroicons/react/24/outline";

const SwitchButton = () => {
  // Ensure that the default value is retrieved properly
  const [darkMode, setDarkMode] = useState(
    localStorage.getItem("darkMode") === "true" // Only check for string "true"
  );

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("darkMode", "true");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("darkMode", "false");
    }
  }, [darkMode]);

  return (
    <button onClick={() => setDarkMode(!darkMode)} aria-label="Toggle dark mode">
      {darkMode ? <SunIcon className="h-6 w-6 text-yellow-500" /> : <MoonIcon className="h-6 w-6 text-gray-500" />}
    </button>
  );
};

export default SwitchButton;
