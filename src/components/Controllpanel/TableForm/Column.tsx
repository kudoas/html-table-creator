import React from 'react';
import styled from '@emotion/styled';

import useNewTable from '../../../hooks/useNewTable';

type Props = {
  state: string[][];
  tableKeys: number[][]; // row index
  onChange: (e: React.FormEvent<HTMLInputElement>, column: number, row: number) => void;
  column: number;
};

const ColumnForms: React.FCX<Props> = ({ state, onChange, tableKeys, column }) => {
  return (
    <div>
      {tableKeys[0].map((i) => (
        <input
          key={i}
          type="text"
          value={state[column][i]}
          onChange={(e) => onChange(e, column, i)}
        />
      ))}
    </div>
  );
};

export default ColumnForms;
