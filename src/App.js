import React, {Component } from 'react';
import './App.css';
import Header from './components/header/header.jsx';
import Question from './components/questions/question';
import Answer from './components/answer/answer';
import Description from './components/description/description';


export default class App extends Component{
  state={
    navActive:0,
  }
  idX=0;
  onChangeLevel=()=>{
    this.idX=this.idX+1
    this.setState(()=>{
    console.log(this.idX);
     return  {
      navActive:this.idX,
      }
    })
  }
  render(){
    return (
      <div className="App">
        <Header navActive={this.state.navActive}/>
        <Question/>
        <section className='container section'>
          <div className='row'>
            <Answer/>
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
