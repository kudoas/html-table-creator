import React, { useState, useCallback, useEffect } from 'react';

export const TABLE_STORAGE_KEY = 'html-table-creator:table-state';

const createInitialTableState = (): string[][] => [['']];

const isTableState = (value: unknown): value is string[][] => {
  if (!Array.isArray(value) || value.length === 0 || !Array.isArray(value[0])) {
    return false;
  }

  const columnLength = value[0].length;
  if (columnLength === 0) {
    return false;
  }

  return value.every(
    (row) =>
      Array.isArray(row) &&
      row.length === columnLength &&
      row.every((cell) => typeof cell === 'string'),
  );
};

const loadTableState = (): string[][] => {
  try {
    const storedState = window.localStorage.getItem(TABLE_STORAGE_KEY);
    if (!storedState) {
      return createInitialTableState();
    }

    const parsedState = JSON.parse(storedState);
    return isTableState(parsedState) ? parsedState : createInitialTableState();
  } catch {
    return createInitialTableState();
  }
};

export const useProvideTable = () => {
  const [state, setState] = useState<string[][]>(loadTableState);

  useEffect(() => {
    try {
      window.localStorage.setItem(TABLE_STORAGE_KEY, JSON.stringify(state));
    } catch {
      // Ignore storage failures so table editing still works.
    }
  }, [state]);

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
    setState(createInitialTableState());
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
