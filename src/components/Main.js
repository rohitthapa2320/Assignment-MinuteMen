import React from 'react';

import Header from '../components/Header/Header';
import Banner from '../components/Banner/Banner';
import Lessons from '../components/Lessons/Lessons';
import Form from '../components/Form/Form';
import FAQ from '../components/FAQ/FAQ';
import Feedback from '../components/Feedback/Feedback';
import Footer from '../components/Footer/Footer';
import Mock from './Mock/Mock';
import Practice from './Practice/Practice';
import Tests from './Tests/Tests';
import Tips from './Tips/Tips';


const Main = () => {
  return (
    <>
      <Header />
      <Banner />
      <Lessons />
      <Mock />
      <Practice />
      <Tests />
      <Tips />
      <Feedback />
      <Form />
      <FAQ />
      <Footer />
    </>
  )
}

export default Main;
