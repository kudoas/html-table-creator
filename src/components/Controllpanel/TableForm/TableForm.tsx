import React from 'react';
import styled from '@emotion/styled';

import Column from './Column';

type Props = {
  keys?: number[];
  state: string[][];
  tableKeys: number[][];
  onChange: (e: React.FormEvent<HTMLInputElement>, column: number, row: number) => void;
};

const Component: React.FC<Props> = (props) => (
  <div>
    {props.keys.map((k) => (
      <Column
        key={k}
        column={k}
        tableKeys={props.tableKeys}
        onChange={props.onChange}
        state={props.state}
      />
    ))}
  </div>
);

const StyledComponent = styled(Component)``;

const Container: React.FCX<Props> = ({ tableKeys, onChange, state }) => {
  let keys = [];
  for (let i in tableKeys) {
    keys.push(Number(i));
  }

  return <StyledComponent keys={keys} tableKeys={tableKeys} onChange={onChange} state={state} />;
};

export default Container;
