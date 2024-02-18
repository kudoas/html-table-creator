import React from 'react';
import styled from '@emotion/styled';

import Toggle from './Toggle';

type Props = {
  isPreview: boolean;
  onClick: () => void;
};

const Component: React.FCX<Props> = ({ className, isPreview, onClick }) => (
  <div className={className}>
    <h3>Edit</h3>
    <Toggle checked={isPreview} onClick={onClick} />
    <h3>Preview</h3>
  </div>
);

const StyledComponent = styled(Component)`
  vertical-align: middle;
  text-align: right;
  margin: 10px 10px;
  > h3 {
    display: inline-block;
    margin: 10px;
    line-height: 30px;
    font-size: 2rem;
  }
`;

export default StyledComponent;
