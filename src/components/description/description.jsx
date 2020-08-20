import React from 'react';
import './description.css';

class Description extends React.Component{
 
  render(){
    return(
      <div className='description col-md-7 col-sm-8 col-12'>
        <div className="description__image">
          <img className='image' src='https://via.placeholder.com/100x150'></img>
        </div>
        <div className='description-title col-md-8 col-sm-6 col-6'>
          <h4 className='bird-name description-title__name'>Name Birds</h4>
          <h5 className='bird-name description-title__name-latin'>Latin name</h5>
          <div className='audio '></div>
        </div>
        <div className="description__bird col-12">
          <p>brief information about the bird. brief information about the bird. brief information about the bird. brief information about the bird. brief information about the bird. brief information about the bird. brief information about the bird. brief information about the bird. brief information about the bird. brief information about the bird.brief information about the bird. brief information about the bird. brief information about the bird. brief information about the bird. brief information about the bird</p>
        </div>
      </div>
    )
  }
}

export default Description;