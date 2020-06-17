import React from 'react';
import styled from '@emotion/styled';

import Input from './Input';
import Output from './Output';

const Main: React.FCX = ({ className }) => {
  return (
    <main className={className}>
      <h2>Create your Table, INPUT & OUTPUT</h2>
      <Input />
      <Output />
    </main>
  );
};

const StyledMain = styled(Main)`
  h2 {
    text-align: center;
  }
`;

export default StyledMain;
