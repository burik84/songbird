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
import Modal  from './components/modal/modal';

import birdsData from './services/birdsData';

export default class App extends Component{

  state={
    navActive:0,
    totalScore:0,
    levelScore:6,
    numberAnswerTrue:5,
    trueAnswerTrue:false,
    birdData:[
      ...birdsData[0].map(({name,id })=>{
        return this.createBirdItem(name,id)
      })
    ],
    getGameStatus:false,
    getGameFinal:false,
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
    const{ navActive, totalScore, levelScore, getGameStatus, getGameFinal }=this.state;
    let getStatus=getGameStatus;
    let getFinal=getGameFinal;
    let newBirdData=[];
    if(navActive===4){
      getStatus=true;
    }
    if(navActive<5){
      newBirdData=[
        ...birdsData[navActive+1].map(({name,id })=>{
          return this.createBirdItem(name,id)
        })
      ]
    }
    if(navActive===5){
      getFinal=true;
    }
    this.setState(()=>{
     return  {
        navActive:navActive+1,
        totalScore:totalScore+levelScore+1,
        levelScore:6,
        trueAnswerTrue:false,
        birdData:newBirdData,
        getGameStatus:getStatus,
        getGameFinal:getFinal,
      }
    })
  }

  // Получение номера ответа от компонента Answer -  answer item
   onToggleAnswer=(id)=>{
    //  console.log('Item click', id);
    let trueAnswer=false;
    if(id===this.state.numberAnswerTrue){
      trueAnswer=true;
    }
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
        levelScore:this.state.levelScore-1,
        birdData:newArray,
        trueAnswerTrue:trueAnswer,
      }
    })
  }

  closeModal=()=>{
    this.setState(()=>{
      return{
        getGameFinal:false,
      }
    })
  }

  startAgain=()=>{
    this.setState(()=>{
      return{
        navActive:0,
        totalScore:0,
        levelScore:6,
        trueAnswerTrue:false,
        getGameStatus:false,
        getGameFinal:false,
        birdData:[
          ...birdsData[0].map(({name,id })=>{
            return this.createBirdItem(name,id)
          })
        ],
      }
    })
  }
  render(){ 
    const { birdData, trueAnswerTrue, getGameStatus, getGameFinal, totalScore}=this.state;
    const labelButton=getGameStatus?'Completion':'Next level';
    let classNameButtons='btn btn-primary btn-lg btn-block disabled';
    if(trueAnswerTrue){
      classNameButtons='btn btn-primary btn-lg btn-block'
    }
    return (      
      <div className="App">
        <Header 
          navActive={this.state.navActive} 
          totalScore={this.state.totalScore} 
          levelScore={this.state.levelScore}/>
        <Question/>
        <section className='container section'>
          <div className='row'>
            <Answer birdData={birdData} onToggleAnswer={this.onToggleAnswer} trueAnswer={trueAnswerTrue}/>
            <Description/>
          </div>         
        </section>      
        <section className='section container'>          
    <button type="button" className={classNameButtons} onClick={this.onChangeLevel}>{labelButton}</button>
          </section>                
        <section className='section container'>          
            <Modal getGameFinal={getGameFinal} totalScore={totalScore} closeModal={this.closeModal} startAgain={this.startAgain} />       
          </section>       
      </div>
    );
  }
}
