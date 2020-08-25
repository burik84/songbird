import React, { Component} from 'react';
import './question.css'

import AudioBlock from '../audio/audio';

export default class Question extends Component {
  render (){
    const { birdDataQuestion, birdData, number }=this.props;
    const {name, image}=birdDataQuestion;
    const { audio }=birdData[number-1];
    return(
      <section className='section container'>
        <div className="question row">
          <div className='question__image col-sm-3 col-12'>
            <img className='image image--question' src={image} alt={`Bird ${name}`}></img>
          </div>          
          <div className='question-block col-sm-8 col-12'>
            <h3 className='bird-name question-block__name'>{name}</h3>
            <AudioBlock srcAudio={audio} classNames='audio' />
          </div>
        </div>
      </section>
    )
  }
}