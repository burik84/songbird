import React from 'react';
import './answer.css'

class Answer extends React.Component{
  constructor(){
    super()
  }
  render(){
    return(
      <div className='answer'>
        <ul className='answer-list'>
          <li className='answer-item'><span className='answer-round'></span>Eagle</li>
          <li className='answer-item'><span className='answer-round'></span>Kite</li>
          <li className='answer-item'><span className='answer-round'></span>Harrier</li>
          <li className='answer-item'><span className='answer-round'></span>Falcon</li>
          <li className='answer-item'><span className='answer-round'></span>Hawk</li>
          <li className='answer-item'><span className='answer-round'></span>Owl</li>
        </ul>
      </div>
    )
  }
}

export default Answer;