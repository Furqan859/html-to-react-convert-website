import React, { Children } from 'react'
import { useRoutes, Navigate } from 'react-router-dom';
import SliderComponent from './components/slider/SliderComponent';
import FeatureSection from './components/feature/FeatureSection';
import AboutSection from './components/About/AboutSection';
import ProductSection from './components//productdata/ProductsSection'
import ContactSection from './components/contact/ContactSection';
import ClientSection from './components/Client/ClientSection'; import ErrorPage from './pages/ErrorPage';
import LoginSection from './components/LoginSectionsty/LoginSection';
import Home from './pages/Home'
import SignUp from './components/LoginSectionsty/SignUp';
import UnprotectedLayout from './Layouts/UnprotectedLayout';
import ProtectedLayouts from './Layouts/ProtectedLayouts';



export default function RouteComponent() {
         
       const [isToggledOn, setToggle] = React.useState(false)
       const toggle = () => setToggle(!isToggledOn)

       console.warn(isToggledOn,"this is a state value")
     


       console.warn(toggle,"this a route toggle")
       return useRoutes([

        {   
              path: "/",element:isToggledOn ?(<ProtectedLayouts toggle={toggle} isToggledOn={isToggledOn} />) : (<Navigate to="/login" replace />),
          children:[
              {
                     path:"/",element:<Navigate to="/home" replace/>
              },
              { path: '/home', element: <Home /> },
              { path: '/feature', element: <SliderComponent /> },
              { path: '/feature', element: <FeatureSection /> },
              { path: '/about', element: <AboutSection /> },
              { path: '/product', element: <ProductSection /> },
              { path: '/contact', element: <ContactSection /> },
              { path: '/client', element: <ClientSection /> },
              // { path: '/login', element: <LoginSection/> },
              // { path: '/signup', element: <SignUp /> },
              
           ]

        },

        {   
              path: "/",element:isToggledOn ? (<Navigate to="/home" replace />):(<UnprotectedLayout />),
          children:[
             
              { path: '/login', element: <LoginSection toggle={toggle}/> },
              { path: '/signup', element: <SignUp /> },
              { path: "*", element: <ErrorPage /> },
           ]

        }
       ])
}

