import React, { useState, createContext } from 'react';

const Context = createContext({});

const Provider: React.FC = (props) => {
  // will support dark mode
  // const [mode, setMode] = useState(['white', 'dark']);

  const [tableItems, setTableItems] = useState(['']);
  const [row, setRow] = useState(1);
  const [column, setColumn] = useState(1);
  const [text, setText] = useState('');

  const onInput = (e: React.FormEvent<HTMLInputElement>, key: number): void => {
    const tableItem = e.currentTarget.value;
    tableItems[key] = tableItem;
    setText(tableItem);
  };

  const addRow = (): void => {
    let nextTableItems = tableItems.concat();
    nextTableItems.push('');
    setTableItems(nextTableItems);
    setColumn(column + 1);
  };

  // can't update state, tableItems
  const removeRow = (): void => {
    let nextTableItems = tableItems.concat().slice(0, tableItems.length - 1);
    setTableItems(nextTableItems);
    setColumn(column - 1);
  };

  // addRow, removeRow
  // ...

  return (
    <Context.Provider
      value={{
        // mode: mode,
        text: text,
        row: row,
        column: column,
        tableItems: tableItems,
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
