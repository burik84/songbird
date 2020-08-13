import React from 'react';
import { Fragment } from 'react';
import './header.css'

const Header = () => {
    return (
      <>
        <div className="container header d-flex">
          <div className='header-content d-flex'>
            <h2 className='header-title'>
              <a className='navbar-brand' href="#">
                Songbird
              </a>
            </h2>
            <div className='game-score'>
                <span className='game-score_assign'>+ 0</span>
                <span className='game-score_item'>Score: 00</span>
            </div>
          </div>
          <div className='list-questions'>
              <ul className="nav nav-tabs list-items">
                <li className="list-item nav-item">
                    Warm up
                </li>
                <li className="list-item nav-item">
                    Passerines
                </li>
                <li className="list-item nav-item">
                    Forest birds
                </li>
                <li className="list-item nav-item">
                    Song birds
                </li>
                <li className="list-item nav-item">
                    Predator birds
                </li>
                <li className="list-item nav-item">
                    Sea birds
                </li>
              </ul>
          </div>
        </div>
      </>
    );
  };
  
  export default Header;