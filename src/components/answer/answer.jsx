import React from 'react';
import './answer.css'

import birdsData from '../../services/birdsData';
class Answer extends React.Component{
  constructor(props){
    super(props)
  }

  state={
    numberAnswerTrue:2,
    getAnswer:0,
    answerTrue:false,
  }

// получение номера ответа по списку для поднятия наверх в компонент APP и сравнения с номером правильного ответа

  onClickAnswer=(e)=>{
    const answer=+e.target.getAttribute('data-id');
    this.props.getAnswerNumber(answer);
    // console.log(answer, this.state.trueAnswer);
    // if(this.state.numberAnswerTrue===answer){
    //   console.log('правильный ответ');
    //   this.setState({
    //     getAnswer: true,
    //     }
    //   )
    // }else{
    //   console.log('ответ не правильный');
    //   this.setState({
    //     getAnswer: this.state.getAnswer+1,
    //     }
    //   )
    // }
  }

  render(){
    const BirdName=birdsData[0].map(({name,id })=>{
      return(
        <li className='answer-item list-group-item d-flex justify-content-between align-items-center ' data-id={id} key={name}>{name} </li>
      )
    })
    return(
      <div className='answer col-md-5 col-sm-4 col-12'>
        <ul className='answer-items list-group' onClick={this.onClickAnswer}>
          {/* <li className='answer-item list-group-item d-flex justify-content-between align-items-center '>Eagle </li>
          <li className='answer-item answer-item--true disabled list-group-item d-flex justify-content-between align-items-center'>Kite</li>
          <li className='answer-item list-group-item d-flex justify-content-between align-items-center'>Harrier</li>
          <li className='answer-item answer-item--false disabled list-group-item d-flex justify-content-between align-items-center'>Falcon</li>
          <li className='answer-item answer-item--false disabled list-group-item d-flex justify-content-between align-items-center'>Hawk</li>
          <li className='answer-item list-group-item d-flex justify-content-between align-items-center'>Owl</li> */}
          {BirdName}
        </ul>
      </div>
    )
  }
}

export default Answer;
