import React, { useState, createContext } from 'react';

const Context = createContext({});

const Provider: React.FC = (props) => {
  // will support dark mode
  // const [mode, setMode] = useState(['white', 'dark']);

  const [tableItems, setTableItems] = useState([['']]);
  const [row, setRow] = useState(1);
  const [column, setColumn] = useState(1);
  const [text, setText] = useState('');

  const onInput = (e: React.FormEvent<HTMLInputElement>, column: number, row: number): void => {
    const tableItem = e.currentTarget.value;
    tableItems[column][row] = tableItem;
    setText(tableItem);
  };

  const addColumn = (): void => {
    let nextTableItems = tableItems.concat();
    for (let i = 0; i < tableItems.length; i++) {
      nextTableItems[i].push('');
    }
    setTableItems(nextTableItems);
  };

  // can't update state, tableItems
  const removeColumn = (): void => {
    let nextTableItems = tableItems.concat();
    for (let i = 0; i < tableItems.length; i++) {
      nextTableItems[i].pop();
    }
    setTableItems(nextTableItems);
  };

  // addRow, removeRow
  const addRow = (): void => {
    const lengthOfTableColumn = tableItems.concat()[0].length;
    let nextTableItems = tableItems.concat();
    let initialArr = [];
    for (let i = 0; i < lengthOfTableColumn; i++) {
      initialArr.push('');
    }
    nextTableItems.push(initialArr);
    setTableItems(nextTableItems);
  };

  const removeRow = (): void => {
    const nextTableItems = tableItems.concat().slice(0, tableItems.length - 1);
    setTableItems(nextTableItems);
  };

  return (
    <Context.Provider
      value={{
        // mode: mode,
        text: text,
        row: row,
        column: column,
        tableItems: tableItems,
        onInput: onInput,
        addColumn: addColumn,
        removeColumn: removeColumn,
        addRow: addRow,
        removeRow: removeRow,
      }}
    >
      {props.children}
    </Context.Provider>
  );
};

export { Provider, Context };
