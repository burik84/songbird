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
          <img className='image--question image' src={image} alt={`Bird ${name}`}></img>
          <div className='question-block'>
            <h3 className='bird-name question-block__name'>{name}</h3>
            <AudioBlock srcAudio={audio} classNames='audio' />
          </div>
        </div>
      </section>
    )
  }
}