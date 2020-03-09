import React from 'react';
import './App.css';
import { ThemeProvider } from 'styled-components'
import { lightTheme, darkTheme } from './Theme/Theme'
import { useDarkMode } from './Theme/UseDarkMode'
import Landing from './Components/Landing/Landing'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons'
import { faCheckSquare, faCoffee } from '@fortawesome/free-solid-svg-icons'

library.add(faGithub, faLinkedin, faCheckSquare, faCoffee)

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
