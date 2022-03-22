import React from 'react';
import FooterSection from './pages/FooterSection';
import HeaderSection from './pages/HeaderSection';
import { BrowserRouter } from 'react-router-dom';
import Home from './pages/Home';
import RouteComponent from './RouteComponent';

function App() {

  return (<div>

    <BrowserRouter>



      <RouteComponent />

      <FooterSection />

    </BrowserRouter>

  </div>

  );
}

export default App;
