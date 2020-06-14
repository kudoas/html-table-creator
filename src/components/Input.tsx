import React, { useState, useContext } from 'react';

import { Context } from './Context';

const Input: React.FCX = () => {
  const context: any = useContext(Context);

  let arr = [];
  for (let i = 0; i < context.tableItems.length; i++) {
    arr.push(i);
  }
  // console.log(context.tableItems.length);

  return (
    <React.Fragment>
      {/* <input name="table-item" placeholder="Table Item" onInput={(e) => context.onInput(e, 0)} /> */}
      {arr.map((key: number) => (
        <input
          key={key}
          name="table-item"
          placeholder="Table Item"
          onInput={(e) => context.onInput(e, key)}
        />
      ))}
      <button onClick={context.addRow}>Add Column</button>
      {context.tableItems.length > 1 ? (
        <button onClick={context.removeRow}>Remove Column</button>
      ) : null}
    </React.Fragment>
  );
};

export default Input;
