import React from 'react';
import Header from '../components/layout/header.jsx'
import Banner from '../components/layout/banner.jsx'
import Footer from '../components/layout/footer.jsx'
import Cards from '../components/Cards.jsx'

const Logements = () => {
  return (
    <>
      <Header />
      <Banner />
      <Cards />
      <Footer />
      <h1>Contenu spécifique à la page Home</h1>
    </>
  );
}

export default Logements;