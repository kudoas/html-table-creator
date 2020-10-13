import React from 'react';
import styled from '@emotion/styled';

type Props = {
  state: string[][];
  tableKeys: number[][]; // row index
  onChange: (e: React.FormEvent<HTMLInputElement>, column: number, row: number) => void;
  column: number;
};

const Component: React.FCX<Props> = ({ className, state, onChange, tableKeys, column }) => {
  return (
    <div className={className}>
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

const StyledComponent = styled(Component)`
  text-align: center;
  > input {
    background-color: #e0e5ec;
    box-shadow: 2px 2px 10px #ffffff, -2px -2px 10px #a3b1c6;
    border-radius: 5px;
    padding: 8px;
    margin: 10px;
  }
`;

export default StyledComponent;
