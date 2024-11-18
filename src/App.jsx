// Copyright © 2024 ColdByDefault. All rights reserved.
// Unauthorized copying or use is prohibited.

import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  return (
    <div>
      {/* Main Content */}
      <div className="container">
        <h1>Welcome to my Lab!</h1>
        <p>Exciting things are coming soon. Stay tuned for updates!</p>

        <div className="dots">
          <div className="dot"></div>
          <div className="dot"></div>
          <div className="dot"></div>
        </div>

        <div className="social-icons flexy">
          <h3 style={{ paddingTop: '1rem' }}>Visit my</h3>
          <a href="https://linktr.ee/ColdByDefault" target="_blank" rel="noopener noreferrer">Link.tree</a>
        </div>
        <div>
          <h4>ColdByDefault</h4>
        </div>
      </div>
    </div>
  );
}

export default App
