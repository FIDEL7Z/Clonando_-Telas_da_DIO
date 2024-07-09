import React from 'react';
import ReactDom from 'react-dom/client';
import App from './App';
import { Login } from './pages/login';
import {GlobalStyle} from './styles/global';

const root = ReactDom.createRoot(document.getElementById('root'));
root.render(
   <React.StrictMode>
      <GlobalStyle/>
     <App></App>
    </React.StrictMode>
)