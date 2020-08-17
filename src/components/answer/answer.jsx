import React from 'react';
import './answer.css'

class Answer extends React.Component{
  constructor(){
    super()
  }
  render(){
    return(
      <div className='answer col-md-5 col-sm-4 col-12'>
        <ul className='answer-items list-group'>
          <li className='answer-item list-group-item d-flex justify-content-between align-items-center '>Eagle </li>
          <li className='answer-item answer-item--true disabled list-group-item d-flex justify-content-between align-items-center'>Kite</li>
          <li className='answer-item list-group-item d-flex justify-content-between align-items-center'>Harrier</li>
          <li className='answer-item answer-item--false disabled list-group-item d-flex justify-content-between align-items-center'>Falcon</li>
          <li className='answer-item answer-item--false disabled list-group-item d-flex justify-content-between align-items-center'>Hawk</li>
          <li className='answer-item list-group-item d-flex justify-content-between align-items-center'>Owl</li>
        </ul>
      </div>
    )
  }
}

export default Answer;
