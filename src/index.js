import React from 'react';
import ReactDom from 'react-dom';
import App from './components/App';
import 'react-toastify/dist/ReactToastify.css';
import 'bootstrap/dist/css/bootstrap.css';
import './style.css';

ReactDom.render(<App/>,document.querySelector('#root'));
