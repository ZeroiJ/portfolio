import React, { createContext, useContext, useState, useEffect } from 'react';

const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
    // Lock theme to 'tavus' permanently
    const theme = 'tavus';

    useEffect(() => {
        document.documentElement.setAttribute('data-theme', theme);
        // Clean up legacy local storage if it exists
        localStorage.removeItem('portfolio-theme');
    }, []);

    // No toggle logic needed anymore
    return (
        <ThemeContext.Provider value={{ theme }}>
            {children}
        </ThemeContext.Provider>
    );
};

export const useTheme = () => useContext(ThemeContext);
