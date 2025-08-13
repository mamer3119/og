import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import '@/index.css';
import { initializeAnalytics } from './utils/analytics.js';
import { initializeABTesting } from './utils/abTesting.js';

// Initialize analytics tracking on app load
initializeAnalytics();

// Initialize A/B testing framework
initializeABTesting();

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);