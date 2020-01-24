import React from 'react';
import './App.css';
import { ThemeProvider } from 'styled-components'
import { lightTheme, darkTheme } from './Theme/Theme'
import { useDarkMode } from './Theme/UseDarkMode'
import Landing from './Components/Landing/Landing'

function App() {
  const [theme, componentMounted] = useDarkMode();
  const themeMode = theme === 'light' ? lightTheme : darkTheme;

  if (!componentMounted) {
    return <div />
  }

  return (
    <div className="App">
      <ThemeProvider theme={themeMode}>
        <Landing />
      </ThemeProvider>
    </div>
  );
}

export default App;
