import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import App from './App';
import Routing from './routing/routing';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* <App /> */}
    <Routing />
  </React.StrictMode>
);
