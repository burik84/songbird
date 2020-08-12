import React from 'react';
import './question.css'

class Question extends React.Component{
  constructor(){
    super()
  }
  render(){
    return(
      <section className='question'>
        <img className='question-image image' src='https://via.placeholder.com/150'></img>
        <div className='question-block'>
          <h3>Name Birds</h3>
          <div className='audio'></div>
        </div>
      </section>
    )
  }
}

export default Question;