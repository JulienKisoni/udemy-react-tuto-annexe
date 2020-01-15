import React, {useState, useEffect, Fragment} from 'react';
import logo from './logo.svg';
import './App.css';
import { ThemeProvider } from 'styled-components';

import Button from './components/Button';
import THEME from './theme';

function App() {
  // const [count, setCount] = useState(0);
  // const [visible, setVisible] = useState(true);
  
  const [state, setState] = useState({
    count: 0,
    visible: true,
    theme: 'light'
  });
  useEffect(()=> {
    console.log('je suis useEffect !', state);
  }, [state]);
  const add = () => {
    const newCount = state.count + 1;
    setState(prevState => {
      return {
        ...prevState,
        count: newCount
      }
    });
  }
  const remove = () => {
    const newCount = state.count - 1;
    setState(prevState => {
      return {
        ...prevState,
        count: newCount
      }
    });
  }
const toggle = () => {
  const newVisible = !state.visible;
  setState(prevState => {
    return {
      ...prevState,
      visible: newVisible
    }
  });
}
const toggleTheme = () => {
  let newTheme;
  if(state.theme === 'light') {
    newTheme = 'dark';
  } else {
    newTheme = 'light';
  }
  setState(prevState => {
    return {
      ...prevState,
      theme: newTheme
    }
  });
}
  const theme = state.theme === 'light' ? THEME.light : THEME.dark;
  return (
    <ThemeProvider theme={theme}>
      <div className="App">
      {state.visible ? (
        <Fragment>
          <h3>{state.count}</h3>
          <Button green={true} onClick={add}>Ajouter</Button>
          <Button green={false} onClick={remove}>Retirer</Button>
        </Fragment>
        ) : (
          <p>Pas Visible désolé !</p>
        )}
        <button onClick={toggle}>Toggle Visibilité</button>
        <button onClick={toggleTheme}>Toggle Thème</button>
      </div>
    </ThemeProvider>
  );
}

export default App;
