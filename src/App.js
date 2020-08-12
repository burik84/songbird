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
      <section className='award'>
        <Answer/>
        <Description/>
        <button className='btn award-btn'>Next level</button>
      </section>
    </div>
  );
}

export default App;
