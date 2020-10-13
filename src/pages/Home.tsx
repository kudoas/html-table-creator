import React, { useState } from 'react';

import useNewTable from '../hooks/useNewTable';
import Header from '../components/Header';
import ControllPanel from '../components/Controllpanel/ControllPanel';
import Footer from '../components/Footer';
import Output from '../components/Controllpanel/Output/Output';

const Container: React.FCX = ({ className }) => {
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
    <>
      <Header />
      <h2>Create your table</h2>
      <button onClick={() => setIsPreview(!isPreview)}>切り替え</button>
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
    </>
  );
};

export default Container;
