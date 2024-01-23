import React from 'react';
import Header from '../components/layout/header.jsx'
import Footer from '../components/layout/footer.jsx'
import PageLogement from '../components/PageLogements/PageLogement.jsx';

const Logements = () => {
  return (
    <>
      <Header />
      <PageLogement />
      <Footer />
    </>
  );
}

export default Logements;