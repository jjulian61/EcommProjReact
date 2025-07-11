import React from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
//import {library} from '@fortawesome/fontawesome-svg-core'
//import {faBars, faShoppingCart, faTimes } from '@fortawesome/fontawesome-svg-Icons'

//library.add(faBars, faShoppingCart, faTimes)
const container = document.getElementById('root');
const root = createRoot(container);
root.render(<App />);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
