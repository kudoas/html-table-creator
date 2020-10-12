import React, { useContext } from 'react';
import styled from '@emotion/styled';

import { generateTableId } from '../../../utils/generateTableId';
import Button from '../../Button';

type Props = {
  state: string[][];
  addColumn: () => void;
  removeColumn: () => void;
  addRow: () => void;
  removeRow: () => void;
  deleteAllItems: () => void;
  reset: () => void;
};

const Container: React.FCX<Props> = ({
  className,
  state,
  addColumn,
  removeColumn,
  addRow,
  removeRow,
  deleteAllItems,
  reset,
}) => {
  // generate input key
  const keys = generateTableId(state);

  return (
    <div className={className}>
      <h3>Buttons</h3>
      <Button onClick={addColumn}>
        Add Column <i className="fas fa-plus"></i>
      </Button>
      <Button onClick={addRow}>
        Add Row <i className="fas fa-plus"></i>
      </Button>
      <Button onClick={removeColumn} isOne={state[0].length <= 1}>
        Remove Column <i className="fas fa-trash-alt"></i>
      </Button>
      <Button onClick={removeRow} isOne={state.length <= 1}>
        Remove Row <i className="fas fa-trash-alt"></i>
      </Button>
      <br />
      <Button onClick={deleteAllItems}>
        Delete All Items <i className="fas fa-trash-alt"></i>
      </Button>
      <Button onClick={reset}>
        Reset Table <i className="fas fa-undo"></i>
      </Button>
    </div>
  );
};

export default Container;
