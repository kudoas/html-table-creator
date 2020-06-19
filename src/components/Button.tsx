import React from 'react';
import styled from '@emotion/styled';

type Props = {
  onClick?: () => void;
  isOne?: boolean;
  type?: any;
};

const Button: React.FCX<Props> = (props) => {
  const { className, children, onClick, isOne, type } = props;
  return (
    <button onClick={onClick} className={className} disabled={isOne} type={type}>
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
  :disabled {
    background: #ccc;
    box-shadow: 1px 1px 5px #ffffff, -1px -1px 5px #a3b1c6;
    color: #ffffff;
    cursor: not-allowed;
    border: #ccc;
  }
`;

export default StyledButton;
