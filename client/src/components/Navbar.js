import React, { useState } from 'react';

import useDarkMode from '../hooks/useDarkMode';

const Navbar = () => {
  // const [darkMode, setDarkMode] = useState(false);

  const [darkMode, setDarkMode] = useDarkMode(false);
  const toggleMode = e => {
    e.preventDefault();
    setDarkMode(!darkMode);
  };
  return (
    <nav className="navbar">
      <div className="dark-mode__toggle">
        <button onClick={toggleMode} className={darkMode ? 'toggle toggled' : 'toggle'}
        >
   Toggle
    </button>
      </div>
    </nav>
  );
};

export default Navbar;
