import React from 'react';
import SliderComponent from '../components/slider/SliderComponent';
import FeatureSection from '../components/feature/FeatureSection';
import AboutSection from '../components/About/AboutSection';
import ProductSection from '../components//productdata/ProductsSection'
import ContactSection from '../components/contact/ContactSection';
import ClientSection from '../components/Client/ClientSection';
import { Link } from 'react-router-dom';


const Home = () => {
  return (
    <div>
<Link to='/home'></Link>
    <SliderComponent/>
    <FeatureSection/>
    <AboutSection/>
    <ProductSection/>
    <ContactSection/>
<ClientSection/>



    </div>
  )
}

export default Home