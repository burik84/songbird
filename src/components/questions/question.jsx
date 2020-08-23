import React from 'react';
import './question.css'

const Question= ({birdData})=> {
  const {name, image, audio}=birdData;
    return(
      <section className='section container'>
        <div className="question">
          <img className='question--image image' src={image} alt={`Image ${name}`}></img>
          <div className='question-block'>
    <h3 className='bird-name question-block__name'>{name}</h3>
            <div className='audio'></div>
          </div>
        </div>
      </section>
    )
}

export default Question;