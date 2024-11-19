// Copyright © 2024 ColdByDefault. All rights reserved.
// Unauthorized copying or use is prohibited.


// Everything you know; is a lie.

import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Intro from './components/Intro';
import Portfolio from './components/Portfolio';

function App() {
  const [activeSection, setActiveSection] = useState('Home');

  return (
    <div>
      <Navbar setActiveSection={setActiveSection} />
      {activeSection === 'Home' && <Intro />}
      {activeSection === 'Projects' && <Portfolio />}
      {activeSection === 'Links' && <div>Links Section Coming Soon...</div>}
      {activeSection === 'Contact' && <div>Contact Section Coming Soon...</div>}
    </div>
  );
}

export default App;

