import React from 'react';

import { generateTableId } from '../../utils/generateTableId';
import useNewTable from '../../hooks/useNewTable';
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

const Container: React.FCX<Props> = ({
  state,
  onChange,
  addColumn,
  removeColumn,
  addRow,
  removeRow,
  deleteAllItems,
  reset,
}) => {
  // const {
  //   state,
  //   onChange,
  //   addColumn,
  //   removeColumn,
  //   addRow,
  //   removeRow,
  //   deleteAllItems,
  //   reset,
  // } = useNewTable();

  // generate input key
  let keys = generateTableId(state);

  return (
    <div>
      <ControllButtons
        state={state}
        addColumn={addColumn}
        removeColumn={removeColumn}
        addRow={addRow}
        removeRow={removeRow}
        deleteAllItems={deleteAllItems}
        reset={reset}
      />
      <TableForm tableKeys={keys} onChange={onChange} state={state} />
    </div>
  );
};

export default Container;
