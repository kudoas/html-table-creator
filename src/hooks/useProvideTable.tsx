import React, { useState, useCallback } from 'react';

export const useProvideTable = () => {
  const [state, setState] = useState([['']]);

  const onChange = useCallback(
    (e: React.FormEvent<HTMLInputElement>, column: number, row: number) => {
      const tableItem = e.currentTarget.value;
      const updateState = [...state];
      updateState[column][row] = tableItem;
      setState(updateState);
    },
    [state],
  );

  const addColumn = useCallback(() => {
    let updateState = [...state];
    for (const updateStateItem of updateState) {
      updateStateItem.push('');
    }
    setState(updateState);
  }, [state]);

  const removeColumn = useCallback(() => {
    let updateState = [...state];
    for (const updateStateItem of updateState) {
      updateStateItem.pop();
    }
    setState(updateState);
  }, [state]);

  const addRow = useCallback(() => {
    let updateState = [...state];
    const initRow = new Array(updateState[0].length).fill('');
    updateState.push(initRow);
    setState(updateState);
  }, [state]);

  const removeRow = useCallback(() => {
    const updateState = [...state].slice(0, state.length - 1);
    setState(updateState);
  }, [state]);

  const deleteAllItems = useCallback(() => {
    let updateState = [...state];
    for (const updateStateItem of updateState) {
      updateStateItem.fill('');
    }
    setState(updateState);
  }, [state]);

  const reset = useCallback(() => {
    setState([['']]);
  }, [state]);

  return {
    state,
    actions: {
      onChange,
      addColumn,
      removeColumn,
      addRow,
      removeRow,
      deleteAllItems,
      reset,
    },
  };
};
