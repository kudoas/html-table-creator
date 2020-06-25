import React, { useContext } from 'react';
import styled from '@emotion/styled';

import Button from './Button';
// import ResetModal from './Modal';
import { Context } from './Context';

type ColumnTypes = {
  arr2d: number[][];
  column: number;
};

const ColumnForms: React.FCX<ColumnTypes> = (props) => {
  const context = useContext(Context);
  const { arr2d, column } = props;
  return (
    <div>
      {arr2d[0].map((i: any) => (
        <input
          key={i}
          type="text"
          value={context.tableItems[column][i]}
          onChange={(e) => context.onInput(e, column, i)}
        />
      ))}
    </div>
  );
};

type ColumnAndRowType = {
  arr2d: number[][];
};

const ColumnAndRowForms: React.FCX<ColumnAndRowType> = (props) => {
  const context = useContext(Context);
  const { arr2d } = props;

  let keys = [];
  for (let i in context.tableItems) {
    keys.push(Number(i));
  }
  return (
    <div>
      {keys.map((k: number) => (
        <ColumnForms key={k} column={k} arr2d={arr2d} />
      ))}
    </div>
  );
};

const Input: React.FCX = ({ className }) => {
  const context = useContext(Context);

  // generate input key
  let keys = [];
  for (const tableItem of context.tableItems) {
    let arr = [];
    for (let i in tableItem) {
      arr.push(Number(i));
    }
    keys.push(arr);
  }

  return (
    <div className={className}>
      <Button onClick={context.addColumn}>
        Add Column <i className="fas fa-plus"></i>
      </Button>
      <Button onClick={context.addRow}>
        Add Row <i className="fas fa-plus"></i>
      </Button>
      <Button onClick={context.removeColumn} isOne={context.tableItems[0].length <= 1}>
        Remove Column <i className="fas fa-trash-alt"></i>
      </Button>
      <Button onClick={context.removeRow} isOne={context.tableItems.length <= 1}>
        Remove Row <i className="fas fa-trash-alt"></i>
      </Button>
      <br />
      <Button onClick={context.deleteAllItems}>
        Delete All Items <i className="fas fa-trash-alt"></i>
      </Button>
      <Button onClick={context.resetTable}>
        Reset Table <i className="fas fa-undo"></i>
      </Button>
      <ColumnAndRowForms arr2d={keys} />
      {/* <ResetModal /> */}
    </div>
  );
};

const StyledInput = styled(Input)`
  text-align: center;
  margin: 10px;
  input {
    background-color: #e0e5ec;
    box-shadow: 2px 2px 10px #ffffff, -2px -2px 10px #a3b1c6;
    border-radius: 5px;
    padding: 8px;
    margin: 10px;
  }
`;

export default StyledInput;
