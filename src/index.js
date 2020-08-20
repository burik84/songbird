import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

const getResource= async (url) =>{
  const res=await fetch(url, { mode: 'no-cors'});
  
  console.log(res.status);
  if(!res.ok){
    throw new Error(`Could not fetch ${url}, received ${res.status}`);
  }

  const body=await res.json();
  return body;
}

getResource('https://www.xeno-canto.org/api/2/recordings?query=cnt:brazil')
  .then((body)=>{
    console.log(body);
  })
  .catch((err)=>{
    console.error('Could not fetch', err);
  })
