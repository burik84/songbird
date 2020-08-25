// navActive текущий индекс вопроса
// totalScore общее количество баллов
// levelScore количество балла за вопрос измениющееся в процесса ответов
// numberAnswerTrue - номер правильного ответа
// trueAnswerTrue есть ли правильный ответ, при инициализации в состояние false
// getGameStatus - выбран последний вопрос
// getGameFinal - получен последний ответ
// itemAnswer - выбранный ответ, при инициализации null
// birdData - массив данных для игры

import React, {Component } from 'react';
import './App.css';
import Header from './components/header/header.jsx';
import Question from './components/questions/question';
import Answer from './components/answer/answer';
import Description from './components/description/description';
import Modal  from './components/modal/modal';

import birdsData from './services/birdsData';
import getNumber from './services/random';

export default class App extends Component{

  state={
    navActive:0,
    totalScore:0,
    levelScore:5,   
    numberAnswerTrue:getNumber(),
    trueAnswerTrue:false,
    birdData:[
      ...birdsData[0].map(({name,id, species, description, image, audio })=>{
        return this.createBirdItem(name,id, species, description, image, audio)
      })
    ],
    getGameStatus:false,
    getGameFinal:false,
    itemAnswer:null,
  }

createBirdItem(name, id, species, description, image, audio){
    return {
      id,
      name,
      species,
      description,
      image,
      audio,
      answerTrue:false,
      answerFalse:false,
    }
  }
  // Переход на следующую группу вопросов в headerе
  onChangeLevel=()=>{ 
    const{ navActive, totalScore, levelScore, getGameStatus, getGameFinal }=this.state;
    let getStatus=getGameStatus;
    let getFinal=getGameFinal;
    let newBirdData=[...birdsData[navActive].map(({name, id, species, description, image, audio })=>{
      return this.createBirdItem(name, id, species, description, image, audio)
    })];
    if(navActive===4){
      getStatus=true;
    }
    if(navActive<5){
      newBirdData=[
        ...birdsData[navActive+1].map(({name, id, species, description, image, audio })=>{
          return this.createBirdItem(name, id, species, description, image, audio)
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
        levelScore:5,
        trueAnswerTrue:false,
        birdData:newBirdData,
        getGameStatus:getStatus,
        getGameFinal:getFinal,
        itemAnswer:null,
        numberAnswerTrue:getNumber(),
      }
    })
  }

  // Получение номера ответа от компонента Answer -  answer item
   onToggleAnswer=(id)=>{
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
        itemAnswer:id,
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
        levelScore:5,
        trueAnswerTrue:false,
        getGameStatus:false,
        getGameFinal:false,
        itemAnswer:null,        
        numberAnswerTrue:getNumber(),
        birdData:[
          ...birdsData[0].map(({name,id, species, description, image, audio })=>{
            return this.createBirdItem(name,id, species, description, image, audio)
          })
        ],
      }
    })
  }

  getQuestion=(id)=>{
    const {name, image, species, description, audio }=this.state.birdData[id-1]
    return {
      name,
      image,
      species,
      description,
      audio,
    }
  }

  render(){ 
    const { birdData, trueAnswerTrue, getGameStatus, getGameFinal, totalScore, numberAnswerTrue, itemAnswer }=this.state;
    const labelButton=getGameStatus?'Completion':'Next level';
    let classNameButtons='btn btn-primary btn-lg btn-block disabled';
    let birdDataQuestion={
      name:'*****',
      image:'https://via.placeholder.com/150x100?text=Image+Bird',
      species:'~~~~~',
      description:'Listen to the audio recording and select an answer',
    }
    if(trueAnswerTrue){
      classNameButtons='btn btn-primary btn-lg btn-block';
      birdDataQuestion=this.getQuestion(numberAnswerTrue);
    }
    return (      
      <div className="App">
        <Header 
          navActive={this.state.navActive} 
          totalScore={this.state.totalScore} 
          levelScore={this.state.levelScore}/>
        <Question birdDataQuestion={birdDataQuestion} birdData={birdData} number={numberAnswerTrue}/>
        <section className='container section'>
          <div className='row'>
            <Answer birdData={birdData} onToggleAnswer={this.onToggleAnswer} trueAnswer={trueAnswerTrue}/>
            <Description birdData={birdData} item={itemAnswer}/>
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
