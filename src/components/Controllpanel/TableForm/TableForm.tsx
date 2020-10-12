import React from 'react';
import styled from '@emotion/styled';

import Column from './Column';

type Props = {
  keys?: number[];
  state: string[][];
  tableKeys: number[][];
  onChange: (e: React.FormEvent<HTMLInputElement>, column: number, row: number) => void;
};

const Component: React.FCX<Props> = ({ className, keys, tableKeys, onChange, state }) => (
  <div className={className}>
    {keys.map((k) => (
      <Column key={k} column={k} tableKeys={tableKeys} onChange={onChange} state={state} />
    ))}
  </div>
);

const StyledComponent = styled(Component)`
  text-align: center;
  margin: 10px;
`;

const Container: React.FCX<Props> = ({ tableKeys, onChange, state }) => {
  let keys = [];
  for (let i in tableKeys) {
    keys.push(Number(i));
  }

  return <StyledComponent keys={keys} tableKeys={tableKeys} onChange={onChange} state={state} />;
};

export default Container;
