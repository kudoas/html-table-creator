import React, { useState } from 'react';
import styled from '@emotion/styled';
import hotkeys from 'hotkeys-js';

import { TableProvider } from '../context/TableContext';
import Header from '../components/Header';
import SwitchTableForm from '../components/modules/SwitchTableForm';
import ControllPanel from '../components/Controllpanel/ControllPanel';
import Output from '../components/Controllpanel/Output/Output';
import Footer from '../components/Footer';

hotkeys('f5', (event, handler) => {
  // Prevent the default refresh event under WINDOWS system
  event.preventDefault();
  alert('you pressed F5!');
});

type Props = {
  isPreview: boolean;
  onClick: () => void;
};

const Component: React.FCX<Props> = ({ className, isPreview, onClick }) => (
  <TableProvider>
    <div className={className}>
      <Header />
      <h2>Create Your Table</h2>
      <SwitchTableForm onClick={onClick} isPreview={isPreview} />
      {isPreview ? <Output /> : <ControllPanel />}
      <Footer />
    </div>
  </TableProvider>
);

const StyledComponent = styled(Component)`
  > .toggle {
    vertical-align: middle;
    text-align: right;
    margin: 10px 10px;
  }
  .toggle > div {
    display: inline-block;
    margin: 10px;
    line-height: 30px;
    font-size: 2rem;
  }
`;

const Container: React.FCX<Props> = () => {
  const [isPreview, setIsPreview] = useState(false);
  return <StyledComponent isPreview={isPreview} onClick={() => setIsPreview(!isPreview)} />;
};

export default Container;
