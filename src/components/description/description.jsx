import React, { Component } from 'react';
import AudioBlock from '../audio/audio';

import './description.css';

export default class Description extends Component{
  render(){

    const { birdData, item }=this.props;


    let nameBird='******';
    let speciesBird='*******';
    let descriptionBird='Listen to the audio recording and select an answer';
    let srcImageBird='https://via.placeholder.com/100x66?text=Image+Bird';
    let srcAudioBird='';

    if (item!==null) {
      const { name, image, species, description, audio }=birdData[item-1];
      nameBird=name;
      speciesBird=species;
      descriptionBird=description;
      srcImageBird=image;
      srcAudioBird=audio;
  }

    return(
      <div className='description col-md-7 col-sm-8 col-12'>
        <div className="description__image">
          <img className='image description--image' src={srcImageBird} alt={`Bird ${nameBird}`} ></img>
        </div>
        <div className='description-title col-md-8 col-sm-6 col-6'>
          <h4 className='bird-name description-title__name'>{nameBird}</h4>
          <h5 className='bird-name description-title__name-latin'>{speciesBird} </h5>
        </div>  
        <AudioBlock srcAudio={srcAudioBird} classNames='audio col-12' />  
        <div className="description__bird col-12">
          <p>{descriptionBird} </p>
        </div>
      </div>
    )

  }
}