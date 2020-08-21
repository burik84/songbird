import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

// import getResource from './services/apiServices';

// getResource('https://www.xeno-canto.org/api/2/recordings?query=cnt:brazil')
//   .then((body)=>{
//     console.log(body);
//   })
//   .catch((err)=>{
//     console.error('Could not fetch', err);
//   })

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

