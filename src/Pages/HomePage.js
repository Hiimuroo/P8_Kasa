import React from 'react';
import Header from '../components/layout/header'
import BannerHome from '../components/Home/bannerAccueil'
import Cards from '../components/Home/containerlogements'
import Footer from '../components/layout/footer'

const Home = () => {
  return (
    <>
      <Header />
      <BannerHome />
      <Cards />
      <Footer />
    </>
  );
}

export default Home;