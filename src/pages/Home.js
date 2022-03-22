import React,{useEffect} from 'react';
import SliderComponent from '../components/slider/SliderComponent';
import FeatureSection from '../components/feature/FeatureSection';
import AboutSection from '../components/About/AboutSection';
import ProductSection from '../components//productdata/ProductsSection'
import ContactSection from '../components/contact/ContactSection';
import ClientSection from '../components/Client/ClientSection';
import { Link, useParams, useLocation } from 'react-router-dom';


const Home = () => {
  const location = useLocation();
  
  const {state} = useLocation();
  const {firstname} = state;
  useEffect( () => {
        alert(firstname)
  })
  
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