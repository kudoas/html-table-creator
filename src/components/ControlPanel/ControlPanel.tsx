import React from 'react';
import styled from '@emotion/styled';

import { generateTableId } from '../../utils/generateTableId';
import { type InsertPosition } from '../../hooks/useProvideTable';
import { useTable } from '../../hooks/useTable';
import ControlButtons from './ControlButtons/ControlButtons';
import TableForm from './TableForm/TableForm';

type Props = {
  state: string[][];
  onChange: (e: React.FormEvent<HTMLInputElement>, column: number, row: number) => void;
  addColumnAt: (columnIndex: number, position: InsertPosition) => void;
  removeColumnAt: (columnIndex: number) => void;
  addRowAt: (rowIndex: number, position: InsertPosition) => void;
  removeRowAt: (rowIndex: number) => void;
  deleteAllItems: () => void;
  reset: () => void;
};

const Component: React.FCX<Props> = ({
  state,
  className,
  onChange,
  addColumnAt,
  removeColumnAt,
  addRowAt,
  removeRowAt,
  deleteAllItems,
  reset,
}) => (
  <div className={className}>
    <ControlButtons deleteAllItems={deleteAllItems} reset={reset} />
    <TableForm
      tableKeys={generateTableId(state)}
      onChange={onChange}
      state={state}
      addColumnAt={addColumnAt}
      removeColumnAt={removeColumnAt}
      addRowAt={addRowAt}
      removeRowAt={removeRowAt}
    />
  </div>
);

const StyledComponent = styled(Component)`
  height: 500px;
`;

const Container: React.FC = () => {
  const {
    state,
    onChange,
    addColumnAt,
    removeColumnAt,
    addRowAt,
    removeRowAt,
    deleteAllItems,
    reset,
  } = useTable();

  return (
    <StyledComponent
      state={state}
      onChange={onChange}
      addColumnAt={addColumnAt}
      removeColumnAt={removeColumnAt}
      addRowAt={addRowAt}
      removeRowAt={removeRowAt}
      deleteAllItems={deleteAllItems}
      reset={reset}
    />
  );
};

export default Container;
