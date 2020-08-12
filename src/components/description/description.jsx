import React from 'react';
import './description.css'

class Description extends React.Component{
  constructor(){
    super()
  }
  render(){
    return(
      <div className='description'>
        <img className='description-image image' src='https://via.placeholder.com/150'></img>
        <div className='question-title'>
          <h3>Name Birds</h3>
          <h4>Latin name</h4>
          <div className='audio'></div>
          <p>brief information about the bird. brief information about the bird. brief information about the bird. brief information about the bird. brief information about the bird</p>
        </div>
      </div>
    )
  }
}

export default Description;