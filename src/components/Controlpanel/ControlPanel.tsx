import React from 'react';
import styled from '@emotion/styled';

import { generateTableId } from '../../utils/generateTableId';
import { useTable } from '../../hooks/useTable';
import ControllButtons from './ControllButtons/ControllButtons';
import TableForm from './TableForm/TableForm';

type Props = {
  state: string[][];
  onChange: (e: React.FormEvent<HTMLInputElement>, column: number, row: number) => void;
  addColumn: () => void;
  removeColumn: () => void;
  addRow: () => void;
  removeRow: () => void;
  deleteAllItems: () => void;
  reset: () => void;
};

const Component: React.FCX<Props> = ({
  state,
  className,
  onChange,
  addColumn,
  removeColumn,
  addRow,
  removeRow,
  deleteAllItems,
  reset,
}) => (
  <div className={className}>
    <ControllButtons
      state={state}
      addColumn={addColumn}
      removeColumn={removeColumn}
      addRow={addRow}
      removeRow={removeRow}
      deleteAllItems={deleteAllItems}
      reset={reset}
    />
    <TableForm tableKeys={generateTableId(state)} onChange={onChange} state={state} />
  </div>
);

const StyledComponent = styled(Component)`
  height: 500px;
`;

const Container: React.FC = () => {
  const { state, onChange, addColumn, removeColumn, addRow, removeRow, deleteAllItems, reset } =
    useTable();

  return (
    <StyledComponent
      state={state}
      onChange={onChange}
      addColumn={addColumn}
      removeColumn={removeColumn}
      addRow={addRow}
      removeRow={removeRow}
      deleteAllItems={deleteAllItems}
      reset={reset}
    />
  );
};

export default Container;
