import React from 'react';
import styled from '@emotion/styled';

import Input from './Input';
import Output from './Output';

const Main: React.FCX = ({ className }) => {
  return (
    <main className={className}>
      <h2>Create your table</h2>
      <Input />
      <Output />
    </main>
  );
};

const StyledMain = styled(Main)`
  h2 {
    font-size: 3.4rem;
    text-align: center;
  }
`;

// #b5ddd1
// #d7e7a9
// #d3c0f9
// #f99a9c
// #fdbccf

export default StyledMain;
