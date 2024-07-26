import React from 'react';
import * as ReactDOMClient from 'react-dom/client';
import App from './App.jsx';
import './index.css';

const container=document.getElementById('root');
const root=ReactDOMClient.createRoot(container);
root.render(  <App/>);
/*
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
  */
