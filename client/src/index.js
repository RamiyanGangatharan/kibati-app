// src/index.js
import 'bootstrap/dist/css/bootstrap.min.css'; 
import '@fortawesome/fontawesome-free/css/all.min.css';
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css'; 
import { BrowserRouter } from 'react-router-dom';
import App from './components/App'; // Main App component
import Header from './components/Header'; // Header component
import Footer from './components/Footer'; // Footer component
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Header />
      <App /> {/* The App component will handle its own routes */}
      <Footer />
    </BrowserRouter>
  </React.StrictMode>
);

// Measure performance
reportWebVitals();
