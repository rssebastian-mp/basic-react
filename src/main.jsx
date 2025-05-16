import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.jsx';
import About from './About.jsx';
import { BrowserRouter, Routes, Route } from 'react-router';
import mixpanel from 'mixpanel-browser';

mixpanel.init('62f0556cc2ca05d01d0f747af8189844', {
  debug: true,
  autocapture: true,
});

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<App />} />
        <Route path='/about' element={<About />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>
);
