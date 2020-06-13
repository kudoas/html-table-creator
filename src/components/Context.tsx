import React, { useState, createContext } from 'react';

const Context = createContext({});

const Provider: React.FC = (props) => {
  // will support dark mode
  const [mode, setMode] = useState(['white', 'dark']);
  const [text, setText] = useState('');

  const onInput = (e: any): void => {
    setText(e.target.value);
  };

  return (
    <Context.Provider value={{ mode: mode, onInput: onInput, text: text }}>
      {props.children}
    </Context.Provider>
  );
};

export { Provider, Context };
