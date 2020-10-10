import React, { useState } from 'react';

export default function TableForm() {
  const [state, setState] = useState([['']]);

  const onChange = (e: React.FormEvent<HTMLInputElement>, column: number, row: number) => {
    const tableItem = e.currentTarget.value;
    const updateState = [...state];
    updateState[column][row] = tableItem;
    setState(updateState);
  };

  const addColumn = () => {
    let updateState = [...state];
    for (const updateStateItem of updateState) {
      updateStateItem.push('');
    }
    setState(updateState);
  };

  const removeColumn = () => {
    let updateState = [...state];
    for (const updateStateItem of updateState) {
      updateStateItem.pop();
    }
    setState(updateState);
  };

  const addRow = () => {
    let updateState = [...state];
    const initRow = new Array(updateState[0].length).fill('');
    updateState.push(initRow);
    setState(updateState);
  };

  const removeRow = () => {
    const updateState = [...state].slice(0, state.length);
    setState(updateState);
  };

  const deleteAllItems = () => {
    let updateState = [...state];
    for (const updateStateItem of updateState) {
      updateStateItem.fill('');
    }
    setState(updateState);
  };

  const reset = () => {
    setState([['']]);
  };

  return {
    state,
    onChange,
    addColumn,
    removeColumn,
    addRow,
    removeRow,
    deleteAllItems,
    reset,
  };
}
