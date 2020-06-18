import React from 'react';
import styled from '@emotion/styled';

type Props = {
  onClick: () => void;
};

const Button: React.FCX<Props> = (props) => {
  const { className, children, onClick } = props;
  return (
    <button onClick={onClick} className={className}>
      {children}
    </button>
  );
};

const StyledButton = styled(Button)`
  padding: 10px;
  background-color: #e0e5ec;
  box-shadow: 1px 1px 5px #a3b1c6, -1px -1px 5px #ffffff;
  margin: 10px;
  border-radius: 4px;
  color: black;
  &:hover {
    color: white;
  }
`;

export default StyledButton;
