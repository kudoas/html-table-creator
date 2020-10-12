import React from 'react';
import { Link } from 'react-router-dom';
import styled from '@emotion/styled';

const Component: React.FCX = ({ className }) => (
  <header className={className}>
    <nav>
      <h1>
        <Link to="/">HTML Table Creator</Link>
      </h1>
    </nav>
  </header>
);

const StyledComponent = styled(Component)`
  h1 {
    padding: 10px;
  }
  a {
    color: inherit;
  }
`;

export default StyledComponent;
