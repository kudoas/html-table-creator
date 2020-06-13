import React, { useState, useContext } from 'react';

import { Context } from './Context';

const Input: React.FCX = () => {
  const [text, setText] = useState('');
  const context: any = useContext(Context);

  return (
    <React.Fragment>
      <input name="table-item" placeholder="Table Item" onInput={context.onInput} />
    </React.Fragment>
  );
};

export default Input;
