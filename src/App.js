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

import birdsData from './services/birdsData';

export default class App extends Component{


  state={
    navActive:0, 
    totalScore:0,
    levelScore:6,
    numberAnswerTrue:2,
    birdData:[
      ...birdsData[0].map(({name,id })=>{
        return this.createBirdItem(name,id)
      })
    ]
  }

createBirdItem(name,id){
    return {
      name:name,
      answerTrue:false,
      answerFalse:false,
      id:id,
    }
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

  // Получение номера ответа от компонента Answer -  answer item
   onToggleAnswer=(id)=>{
     console.log('Item click', id);
     this.setState(({ birdData })=>{
      const idx=birdData.findIndex((el)=>el.id===id);

      // 1. update object      
      const oldItem=birdData[idx];
      const newItem={...oldItem, 
        answerTrue:id===this.state.numberAnswerTrue?true:false,
        answerFalse:id===this.state.numberAnswerTrue?false:true,
      };

      // 2. construct new array
      const newArray=[
        ...birdData.slice(0,idx),
        newItem,
        ...birdData.slice(idx+1)
      ];

      return {
        birdData:newArray,
      }
    })
  }

  render(){ 
    const { birdData}=this.state;
    return (      
      <div className="App">
        <Header 
          navActive={this.state.navActive} 
          totalScore={this.state.totalScore} 
          levelScore={this.state.levelScore}/>
        <Question/>
        <section className='container section'>
          <div className='row'>
            <Answer birdData={birdData} onToggleAnswer={this.onToggleAnswer} />
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
