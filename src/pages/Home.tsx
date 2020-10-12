import React from 'react';

import Header from '../components/Header';
import ControllPanel from '../components/Controllpanel/ControllPanel';
import Footer from '../components/Footer';

const App: React.FC = () => {
  return (
    <>
      <Header />
      <h2>Create your table</h2>
      <ControllPanel />
      <Footer />
    </>
  );
};

export default App;
