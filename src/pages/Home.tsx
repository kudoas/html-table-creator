import React, { useState } from 'react';
import styled from '@emotion/styled';

import TableContainer from '../hooks/useNewTable';
import Header from '../components/Header';
import SwitchTableForm from '../components/modules/SwitchTableForm';
import ControllPanel from '../components/Controllpanel/ControllPanel';
import Output from '../components/Controllpanel/Output/Output';
import Footer from '../components/Footer';

type Props = {
  isPreview: boolean;
  state: string[][];
  onClick: () => void;
  onChange: (e: React.FormEvent<HTMLInputElement>, column: number, row: number) => void;
  addColumn: () => void;
  removeColumn: () => void;
  addRow: () => void;
  removeRow: () => void;
  deleteAllItems: () => void;
  reset: () => void;
};

const Component: React.FCX<Props> = ({
  className,
  isPreview,
  state,
  onClick,
  onChange,
  addColumn,
  removeColumn,
  addRow,
  removeRow,
  deleteAllItems,
  reset,
}) => (
  <div className={className}>
    <Header />
    <h2>Create Your Table</h2>
    <SwitchTableForm onClick={onClick} isPreview={isPreview} />
    {isPreview ? (
      <Output state={state} />
    ) : (
      <ControllPanel
        state={state}
        onChange={onChange}
        addColumn={addColumn}
        removeColumn={removeColumn}
        addRow={addRow}
        removeRow={removeRow}
        deleteAllItems={deleteAllItems}
        reset={reset}
      />
    )}
    <Footer />
  </div>
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

  const {
    state,
    onChange,
    addColumn,
    removeColumn,
    addRow,
    removeRow,
    deleteAllItems,
    reset,
  } = TableContainer.useContainer();

  return (
    <StyledComponent
      state={state}
      onChange={onChange}
      addColumn={addColumn}
      removeColumn={removeColumn}
      addRow={addRow}
      removeRow={removeRow}
      deleteAllItems={deleteAllItems}
      reset={reset}
      isPreview={isPreview}
      onClick={() => setIsPreview(!isPreview)}
    />
  );
};

export default Container;
