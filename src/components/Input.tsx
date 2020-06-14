import React, { useState, useContext } from 'react';

import { Context } from './Context';

const Input: React.FCX = () => {
  const context: any = useContext(Context);

  return (
    <React.Fragment>
      <input name="table-item" placeholder="Table Item" onInput={context.onInput} />
      <button onClick={context.addRow}>Add Row</button>
      {context.row > 1 ? <button onClick={context.removeRow}>Remove Row</button> : null}
    </React.Fragment>
  );
};

export default Input;
