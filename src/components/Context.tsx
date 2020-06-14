import React, { useState, createContext } from 'react';

const Context = createContext({});

const Provider: React.FC = (props) => {
  // will support dark mode
  // const [mode, setMode] = useState(['white', 'dark']);
  const [row, setRow] = useState(1);
  const [column, setColumn] = useState(1);
  const [text, setText] = useState('');

  const onInput = (e: React.FormEvent<HTMLInputElement>, key: string): void => {
    setText(e.currentTarget.value);
  };

  const addRow = (): void => {
    setRow(row + 1);
  };

  const removeRow = (): void => {
    setRow(row - 1);
  };

  // addColumns, removeColumns

  return (
    <Context.Provider
      value={{
        // mode: mode,
        text: text,
        row: row,
        column: column,
        onInput: onInput,
        addRow: addRow,
        removeRow: removeRow,
      }}
    >
      {props.children}
    </Context.Provider>
  );
};

export { Provider, Context };
