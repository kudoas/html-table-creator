import React, { useState, useContext } from 'react';

import { Context } from './Context';

type Props = {
  arg1: [[]];
  column: number;
};

const Comp1: React.FCX<Props> = (props) => {
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

const Comp2: React.FCX<Props1> = (props) => {
  const context: any = useContext(Context);
  const { arg1 } = props;

  let keys = [];
  for (let i = 0; i < context.tableItems.length; i++) {
    keys.push(i);
  }
  return (
    <div>
      {keys.map((k: number) => (
        <Comp1 key={k} column={k} arg1={arg1} />
      ))}
    </div>
  );
};

const Input: React.FCX = () => {
  const context: any = useContext(Context);
  console.log(context.tableItems);

  let keys = [];
  for (let i = 0; i < context.tableItems.length; i++) {
    let arr = [];
    for (let j = 0; j < context.tableItems[0].length; j++) {
      arr.push(j);
    }
    keys.push(arr);
  }
  console.log('keys', keys);

  return (
    <>
      {/* <input name="table-item" placeholder="Table Item" onInput={(e) => context.onInput(e, 0)} /> */}
      <button onClick={context.addColumn}>Add Column</button>
      {context.tableItems[0].length > 1 ? (
        <button onClick={context.removeColumn}>Remove Column</button>
      ) : null}
      <button onClick={context.addRow}>Add Row</button>
      {context.tableItems.length > 1 ? (
        <button onClick={context.removeRow}>Remove Row</button>
      ) : null}
      <br />
      <button onClick={context.resetTable}>Reset</button>
      <Comp2 arg1={keys} />
    </>
  );
};

export default Input;
