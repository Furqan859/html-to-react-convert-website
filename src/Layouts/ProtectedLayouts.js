import React from 'react'

import { NavLink, Outlet } from 'react-router-dom'
import SliderComponent from '../components/slider/SliderComponent';
import FeatureSection from '../components/feature/FeatureSection';
import ProductSection from '../components/productdata/ProductsSection';
import ContactSection from '../components/contact/ContactSection';
import ClientSection from '../components/Client/ClientSection';
import SignUp from '../components/LoginSectionsty/SignUp';
import ErrorPage from '../pages/ErrorPage';
import AboutSection from '../components/About/AboutSection';
import LoginSection from './../components/LoginSectionsty/LoginSection';
import Home from '../pages/Home'
import HeaderSection from '../pages/HeaderSection'




export default function ProtectedLayouts({ isToggledOn, toggle }) {
  return (
    <div>

      <HeaderSection isToggledOn={isToggledOn} toggle={toggle} />



      <Outlet />
    </div>

  )
}