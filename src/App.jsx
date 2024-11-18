// Copyright © 2024 ColdByDefault. All rights reserved.
// Unauthorized copying or use is prohibited.

import React from 'react';
import Landing from './components/Landing';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Intro from './components/Intro';
import Portfolio from './components/Portfolio';
import Timeline from './components/Timeline';


function App() {
  return (
    <div>
      {/* <Landing /> */} 
      <Landing />
      <Intro />
      <Portfolio />
      <Timeline />
      <Contact />
      <Footer />
    </div>
    
  );
}

export default App
