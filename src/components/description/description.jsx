import React, { Component } from 'react';
import AudioBlock from '../audio/audio';

import './description.css';

export default class Description extends Component{
  render(){

    const { birdData, item }=this.props;


    let nameBird='******';
    let speciesBird='*******';
    let descriptionBird='Listen to the audio recording and select an answer';
    let srcImageBird='https://picsum.photos/id/38/150/100?grayscale';
    let srcAudioBird='';

    let classNamesImg='description__image ';
    let classNamesAudio='audio col-11';
    let classNamesDiv='description-title col-md-8 col-sm-6 col-6';

    if (item!==null) {
      const { name, image, species, description, audio }=birdData[item-1];
      nameBird=name;
      speciesBird=species;
      descriptionBird=description;
      srcImageBird=image;
      srcAudioBird=audio;
  }else{
    classNamesImg+=' description--disabled';
    classNamesAudio+=' description--disabled';
    classNamesDiv+=' description--disabled';
  }

    return(
      <div className='description col-md-7 col-sm-8 col-12'>
        <div className={classNamesImg}>
          <img className='image description--image' src={srcImageBird} alt={`Bird ${nameBird}`} ></img>
        </div>
        <div className={classNamesDiv}>
          <h4 className='bird-name description-title__name'>{nameBird}</h4>
          <h5 className='bird-name description-title__name-latin'>{speciesBird} </h5>
        </div>  
        <AudioBlock srcAudio={srcAudioBird} classNames={classNamesAudio} />  
        <div className="description__bird col-11">
          <p>{descriptionBird} </p>
        </div>
      </div>
    )

  }
}