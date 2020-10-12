import React from 'react';

import { generateTableId } from '../../utils/generateTableId';
import useNewTable from '../../hooks/useNewTable';
import ControllButtons from './ControllButtons/ControllButtons';
import TableForm from './TableForm/TableForm';
import Output from './Output/Output';

const Container: React.FCX = () => {
  const {
    state,
    onChange,
    addColumn,
    removeColumn,
    addRow,
    removeRow,
    deleteAllItems,
    reset,
  } = useNewTable();

  // generate input key
  let keys = generateTableId(state);

  return (
    <div>
      <h2>Controll Panel</h2>
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
      <Output state={state} />
    </div>
  );
};

export default Container;
