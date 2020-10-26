import React, { useState } from 'react';
import styled from '@emotion/styled';

import useNewTable from '../hooks/useNewTable';
import Header from '../components/Header';
import ControllPanel from '../components/Controllpanel/ControllPanel';
import Footer from '../components/Footer';
import Output from '../components/Controllpanel/Output/Output';

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
    <h2>Create your table</h2>
    <button onClick={onClick}>切り替え</button>
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

const StyledComponent = styled(Component)``;

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
  } = useNewTable();

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
