import React from 'react';
import { Link } from 'react-router-dom';
import styled from '@emotion/styled';

const Header: React.FCX = ({ className }) => {
  return (
    <header className={className}>
      <nav>
        <h1>
          <Link to="/">HTML Table Creator</Link>
        </h1>
      </nav>
    </header>
  );
};

const StyledHeader = styled(Header)`
  h1 {
    padding: 10px;
  }
  a {
    color: inherit;
  }
`;

export default StyledHeader;
