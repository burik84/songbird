import React from 'react';
import './question.css'

class Question extends React.Component{
  constructor(){
    super()
  }
  render(){
    return(
      <section className='section container'>
        <div className="question">
          <img className='question-image image' src='https://via.placeholder.com/150'></img>
          <div className='question-block'>
            <h3 className='bird-name question-block__name'>Name Birds</h3>
            <div className='audio'></div>
          </div>
        </div>
      </section>
    )
  }
}

export default Question;