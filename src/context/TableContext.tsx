import React, { createContext } from 'react';
import { type InsertPosition, useProvideTable } from '../hooks/useProvideTable';

export interface TableContextProps {
  state: string[][];
  onChange: (e: React.FormEvent<HTMLInputElement>, column: number, row: number) => void;
  addColumn: () => void;
  addColumnAt: (columnIndex: number, position: InsertPosition) => void;
  removeColumn: () => void;
  removeColumnAt: (columnIndex: number) => void;
  addRow: () => void;
  addRowAt: (rowIndex: number, position: InsertPosition) => void;
  removeRow: () => void;
  removeRowAt: (rowIndex: number) => void;
  deleteAllItems: () => void;
  reset: () => void;
}

export const TableContext = createContext({} as TableContextProps);

type Props = {
  children: React.ReactNode;
};

export const TableProvider: React.FC<Props> = ({ children }) => {
  const { state, actions } = useProvideTable();
  const {
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
  } = actions;

  return (
    <TableContext.Provider
      value={{
        state,
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
      }}
    >
      {children}
    </TableContext.Provider>
  );
};
