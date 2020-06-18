import React, { useState, useContext } from 'react';
import styled from '@emotion/styled';

import Button from './Button';
// import ResetModal from './Modal';
import { Context } from './Context';

type Props = {
  arg1: [[]];
  column: number;
};

const ColumnForms: React.FCX<Props> = (props) => {
  const context: any = useContext(Context);
  console.log('context', context);
  const { arg1, column } = props;
  return (
    <div>
      {arg1[0].map((i: any) => (
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

type Props1 = {
  arg1: any;
};

const ColumnAndRowForms: React.FCX<Props1> = (props) => {
  const context: any = useContext(Context);
  const { arg1 } = props;

  let keys = [];
  for (let i = 0; i < context.tableItems.length; i++) {
    keys.push(i);
  }
  return (
    <div>
      {keys.map((k: number) => (
        <ColumnForms key={k} column={k} arg1={arg1} />
      ))}
    </div>
  );
};

const Input: React.FCX = ({ className }) => {
  const context: any = useContext(Context);

  let keys = [];
  for (let i = 0; i < context.tableItems.length; i++) {
    let arr = [];
    for (let j = 0; j < context.tableItems[0].length; j++) {
      arr.push(j);
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
      <ColumnAndRowForms arg1={keys} />
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
    padding: 8px;
    margin: 10px;
  }
`;

export default StyledInput;
