import React from 'react';
import styled from '@emotion/styled';

import Button from '../../Button';

type Props = {
  deleteAllItems: () => void;
  reset: () => void;
};

const Component: React.FCX<Props> = ({
  className,
  deleteAllItems,
  reset,
}) => (
  <div className={className}>
    <Button onClick={deleteAllItems}>
      Delete All Items <i className="fas fa-trash-alt"></i>
    </Button>
    <Button onClick={reset}>
      Reset Table <i className="fas fa-undo"></i>
    </Button>
  </div>
);

const StyledComponent = styled(Component)`
  text-align: center;
`;

export default StyledComponent;
