import React from 'react';
import './App.css';
import Header from './components/header/header.jsx';
import Question from './components/questions/question';
import Answer from './components/answer/answer';
import Description from './components/description/description';


function App() {
  return (
    <div className="App">
      <Header/>
      <Question/>
      <section className='container section'>
        <div className='row'>
          <Answer/>
          <Description/>
        </div>         
      </section>      
      <section className='section container'>          
          <button type="button" className="btn btn-primary btn-lg btn-block disabled">Next level</button>
        </section>       
    </div>
  );
}

export default App;
