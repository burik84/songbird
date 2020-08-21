// navActive текущий индекс вопроса
// totalScore общее количество баллов
// levelScore количество балла за вопрос измениющееся в процесса ответов
// numberAnswerTrue заглушка - номер правильного ответа
// answerTrue есть ли правильный ответ, при инициализации в состояние false

import React, {Component } from 'react';
import './App.css';
import Header from './components/header/header.jsx';
import Question from './components/questions/question';
import Answer from './components/answer/answer';
import Description from './components/description/description';

export default class App extends Component{


  state={
    navActive:0, 
    totalScore:0,
    levelScore:6,
    numberAnswerTrue:2,
    answerTrue:false,
  }

  // Переход на следующую группу вопросов в headerе
  onChangeLevel=()=>{
    this.setState(()=>{
     return  {
      navActive:this.state.navActive+1,
      totalScore:this.state.totalScore+this.state.levelScore,
      }
    })
  }

  // Получение номера ответа от компонента Answer
  getAnswerNumber=(num)=>{
    this.setState({
      answerNumber:num,
    })
  }

  render(){ 
    return (      
      <div className="App">
        <Header 
          navActive={this.state.navActive} 
          totalScore={this.state.totalScore} 
          levelScore={this.state.levelScore}/>
        <Question/>
        <section className='container section'>
          <div className='row'>
            <Answer getAnswerNumber={this.getAnswerNumber}/>
            <Description/>
          </div>         
        </section>      
        <section className='section container'>          
            <button type="button" className="btn btn-primary btn-lg btn-block disabled" onClick={this.onChangeLevel}>Next level</button>
          </section>       
      </div>
    );
  }
}
