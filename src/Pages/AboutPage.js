import React from 'react';
import Header from '../components/layout/header.jsx'
import AboutBanner from '../components/About/bannerAbout.jsx'
import Contents from '../components/About/contentAbout.jsx';
import Footer from '../components/layout/footer.jsx';

const About = () => {
  return (
    <>
    <Header />
    <AboutBanner />
    <Contents />
    <Footer />
    </>
  );
}
export default About;