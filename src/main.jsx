// COPYRIGHT 2024 - ALL RIGHTS RESERVED
// COLDBYDEFAULT
// Description: This is the main entry point of the app. It renders the App component inside the root element of the HTML document.
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App';
import './index.css'
import "./i18n";

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
