import React from 'react';
import Header from '../components/Header';
import Pricing from '../components/Pricing';
import CardPricing from '../components/CardPricing';
import Footer from '../components/Footer';

import { data } from '../utils/mocks/data';




function Home () {
  return (
    <>
     <Header 
     companyName="Odin"
     navBar={[
      {
        name:'Facebook',
        url:'http://facebook.com'
      },
      {
        name:'Twitter',
        url:'http://twitter.com'
      },
      {
        name:'Instagram',
        url:'http://instagram.com'
      },
      {
        name:'Linkedin',
        url:'http://linkedin.com'
      }
     ]}

     infoButton = "Registro"
     />
     <Pricing />
     <CardPricing  datos = { data } />
     <Footer /> 
    </>
  );
}

export default Home;
