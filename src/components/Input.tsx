import React, { useState, useContext } from 'react';

import { Context } from './Context';
import { NamedChunksPlugin } from 'webpack';

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

  let items: any = [];
  for (let i = 0; i < keys.length; i++) {
    items.push(
      keys[i].map((key) => (
        <React.Fragment>
          <input
            key={String(key)}
            name="table-item"
            placeholder="Table Item"
            onInput={(e) => context.onInput(e, i, key)}
          />
        </React.Fragment>
      )),
    );
  }
  console.log('items', items);

  return (
    <React.Fragment>
      {/* <input name="table-item" placeholder="Table Item" onInput={(e) => context.onInput(e, 0)} /> */}
      {items}
      <button onClick={context.addColumn}>Add Column</button>
      {context.tableItems.length > 1 ? (
        <button onClick={context.removeColumn}>Remove Column</button>
      ) : null}
      <button onClick={context.addRow}>Add Row</button>
      <button onClick={context.removeRow}>Remove Row</button>
    </React.Fragment>
  );
};

export default Input;
