import React, {Component} from 'react';
import './header.css'

export default class Header extends Component {
  navItems=[
    {name:'Warm up', id:0},
    {name:'Passerines', id:1},
    {name:'Forest birds', id:2},
    {name:'Song birds', id:3},
    {name:'Predator birds', id:4},
    {name:'Sea birds', id:5},
  ]

  render(){
    const {navActive}=this.props;
    const listItem=this.navItems.map(({name, id})=>{
      const isActive=navActive===id;
      const classActiveNav=isActive?'activ':null;
      return(
        <li className={`nav-item list-item col-md-2 col-sm-4 ${classActiveNav}`} key={id}>
          {name}
        </li>
      )
    })
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
                {listItem}
              </ul>
          </div>
        </div>
      </section>
      );
    }   
  };