import React, { useState, useCallback, useEffect } from 'react';

export const TABLE_STORAGE_KEY = 'html-table-creator:table-state';

export type InsertPosition = 'before' | 'after';

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
      setState((currentState) =>
        currentState.map((currentRow, rowIndex) =>
          rowIndex === column
            ? currentRow.map((cell, columnIndex) => (columnIndex === row ? tableItem : cell))
            : currentRow,
        ),
      );
    },
    [],
  );

  const addColumnAt = useCallback((columnIndex: number, position: InsertPosition) => {
    setState((currentState) => {
      const insertIndex = position === 'after' ? columnIndex + 1 : columnIndex;
      const boundedInsertIndex = Math.max(0, Math.min(insertIndex, currentState[0].length));

      return currentState.map((currentRow) => [
        ...currentRow.slice(0, boundedInsertIndex),
        '',
        ...currentRow.slice(boundedInsertIndex),
      ]);
    });
  }, []);

  const removeColumnAt = useCallback((columnIndex: number) => {
    setState((currentState) => {
      if (currentState[0].length <= 1 || columnIndex < 0 || columnIndex >= currentState[0].length) {
        return currentState;
      }

      return currentState.map((currentRow) =>
        currentRow.filter((_, currentColumnIndex) => currentColumnIndex !== columnIndex),
      );
    });
  }, []);

  const addRowAt = useCallback((rowIndex: number, position: InsertPosition) => {
    setState((currentState) => {
      const insertIndex = position === 'after' ? rowIndex + 1 : rowIndex;
      const boundedInsertIndex = Math.max(0, Math.min(insertIndex, currentState.length));
      const initRow = new Array(currentState[0].length).fill('');

      return [
        ...currentState.slice(0, boundedInsertIndex),
        initRow,
        ...currentState.slice(boundedInsertIndex),
      ];
    });
  }, []);

  const removeRowAt = useCallback((rowIndex: number) => {
    setState((currentState) => {
      if (currentState.length <= 1 || rowIndex < 0 || rowIndex >= currentState.length) {
        return currentState;
      }

      return currentState.filter((_, currentRowIndex) => currentRowIndex !== rowIndex);
    });
  }, []);

  const addColumn = useCallback(() => {
    addColumnAt(state[0].length - 1, 'after');
  }, [addColumnAt, state]);

  const removeColumn = useCallback(() => {
    removeColumnAt(state[0].length - 1);
  }, [removeColumnAt, state]);

  const addRow = useCallback(() => {
    addRowAt(state.length - 1, 'after');
  }, [addRowAt, state]);

  const removeRow = useCallback(() => {
    removeRowAt(state.length - 1);
  }, [removeRowAt, state]);

  const deleteAllItems = useCallback(() => {
    setState((currentState) => currentState.map((currentRow) => currentRow.map(() => '')));
  }, []);

  const reset = useCallback(() => {
    setState(createInitialTableState());
  }, []);

  return {
    state,
    actions: {
      onChange,
      addColumn,
      addColumnAt,
      removeColumn,
      removeColumnAt,
      addRow,
      addRowAt,
      removeRow,
      removeRowAt,
      deleteAllItems,
      reset,
    },
  };
};
