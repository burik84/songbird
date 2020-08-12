import React from 'react';
import './header.css'

const Header = () => {
    return (
      <div className="header d-flex">
        <h2>
          <a href="#">
            Songbird
          </a>
        </h2>
        <div className='list-questions'>
            <ul className="d-flex">
            <li>
                Warm up
            </li>
            <li>
                Passerines
            </li>
            <li>
                Forest birds
            </li>
            <li>
                Song birds
            </li>
            <li>
                Predator birds
            </li>
            <li>
                Sea birds
            </li>
            </ul>
        </div>
        <div className='game-score'>
            <span className='game-score_item'>00</span>
        </div>
      </div>
    );
  };
  
  export default Header;