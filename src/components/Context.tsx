import React, { useState, createContext } from 'react';

interface ContextTypes {
  text: string;
  tableItems: string[][];
  onInput: (e: React.FormEvent<HTMLInputElement>, column: number, row: number) => void;
  addColumn: () => void;
  removeColumn: () => void;
  addRow: () => void;
  removeRow: () => void;
  deleteAllItems: () => void;
  resetTable: () => void;
}

const Context = createContext({} as ContextTypes);

const Provider: React.FC = (props) => {
  // will support dark mode
  // const [mode, setMode] = useState(['white', 'dark']);

  const [tableItems, setTableItems] = useState([['']]);
  const [text, setText] = useState('');

  const onInput = (e: React.FormEvent<HTMLInputElement>, column: number, row: number): void => {
    const tableItem = e.currentTarget.value;
    tableItems[column][row] = tableItem;
    setText(tableItem);
  };

  const addColumn = (): void => {
    let nextTableItems = [...tableItems];
    for (const nextTableItem of nextTableItems) {
      nextTableItem.push('');
    }
    setTableItems(nextTableItems);
  };

  const removeColumn = (): void => {
    let nextTableItems = [...tableItems];
    for (const nextTableItem of nextTableItems) {
      nextTableItem.pop();
    }
    setTableItems(nextTableItems);
  };

  const addRow = (): void => {
    let nextTableItems = [...tableItems];
    const initialArr = new Array(nextTableItems[0].length).fill('');
    nextTableItems.push(initialArr);
    setTableItems(nextTableItems);
  };

  const removeRow = (): void => {
    const nextTableItems = [...tableItems].slice(0, tableItems.length - 1);
    setTableItems(nextTableItems);
  };

  const deleteAllItems = (): void => {
    let nextTableItems = [...tableItems];
    for (const nextTableItem of nextTableItems) {
      nextTableItem.fill('');
    }
    setTableItems(nextTableItems);
  };

  const resetTable = (): void => {
    setTableItems([['']]);
  };

  return (
    <Context.Provider
      value={{
        text: text,
        tableItems: tableItems,
        onInput: onInput,
        addColumn: addColumn,
        removeColumn: removeColumn,
        addRow: addRow,
        removeRow: removeRow,
        deleteAllItems: deleteAllItems,
        resetTable: resetTable,
      }}
    >
      {props.children}
    </Context.Provider>
  );
};

export { Provider, Context };
