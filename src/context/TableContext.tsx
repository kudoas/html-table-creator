import React, { createContext } from 'react';
import { useProvideTable } from '../hooks/useProvideTable';

export interface TableContextProps {
  state: string[][];
  onChange: (e: React.FormEvent<HTMLInputElement>, column: number, row: number) => void;
  addColumn: () => void;
  removeColumn: () => void;
  addRow: () => void;
  removeRow: () => void;
  deleteAllItems: () => void;
  reset: () => void;
}

export const TableContext = createContext({} as TableContextProps);

type Props = {
  children: React.ReactNode;
};

export const TableProvider: React.FC<Props> = ({ children }) => {
  const { state, actions } = useProvideTable();
  const { onChange, addColumn, removeColumn, addRow, removeRow, deleteAllItems, reset } = actions;

  return (
    <TableContext.Provider
      value={{ state, onChange, addColumn, removeColumn, addRow, removeRow, deleteAllItems, reset }}
    >
      {children}
    </TableContext.Provider>
  );
};
