import React from 'react';
import { Fragment } from 'react';
import './header.css'

const Header = () => {
    return (
      <section className="container section">
        <div className="header d-flex">
          <div className='header-content d-flex'>
            <h1 className='header-title display-5'>
                Song<span className='header-title--color'>bird</span>
            </h1>
            <div className='game-score'>
                <span className='game-score_assign'>+ 0</span>
                <span className='game-score_item'>Score: 00</span>
            </div>
          </div>
          <div className='list-questions'>
              <ul className="nav nav-pils list-items">
                <li className="nav-item list-item col-md-2 col-sm-4">
                    Warm up
                </li>
                <li className="nav-item list-item  col-md-2 col-sm-4 col-6">
                    Passerines
                </li>
                <li className="nav-item list-item col-md-2 col-sm-4 col-6 activ">
                    Forest birds
                </li>
                <li className="nav-item list-item col-md-2 col-sm-4 col-6">
                    Song birds
                </li>
                <li className="nav-item list-item col-md-2 col-sm-4 col-6">
                    Predator birds
                </li>
                <li className="nav-item list-item col-md-2 col-sm-4">
                    Sea birds
                </li>
              </ul>
          </div>
        </div>
      </section>
    );
  };
  
  export default Header;