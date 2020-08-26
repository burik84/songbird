import React from 'react';
import './answer.css';

class Answer extends React.Component{

  render(){
    const {birdData, onToggleAnswer, trueAnswer}=this.props;

    const elements=birdData.map((item)=>{
      const {id, answerFalse, answerTrue, name}=item
      let classNames='answer-item list-group-item d-flex justify-content-between align-items-center';
      if(answerTrue){
          classNames+=' answer-item--true disabled'
      }
      if(answerFalse){
          classNames+=' answer-item--false disabled'
      }
      if(trueAnswer){
        classNames+=' disabled'
      }
      return(
        <li key={id} className={classNames} onClick={()=>onToggleAnswer(id)}>
          {name}
        </li>        
      )
    })
    return(
      <div className='answer col-md-5 col-sm-4 col-12'>
        <ul className='answer-items list-group'>
          {elements}
        </ul>
      </div>
    )
  }
}

export default Answer;
