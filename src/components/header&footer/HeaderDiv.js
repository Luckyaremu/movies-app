/* eslint-disable */
import React from 'react';
import headerDiv from '../../styles/HeaderDiv.css';

const HeaderDiv = () => (
  <div>
    <nav className="navbar navbar-light bg-dark mb-5">
      <div className="container">
        <div className="navbar-header">
          <a className="navbar-brand text-white text-lg brand-text" href="https://luckyaremu.github.io/movies-app/#/"><h3 className="home">Home</h3></a>
        </div>
        <ul className="navbar-nav ml-auto text-light d-inline-block">
        <li className="nav-item d-inline-block mr-4">
            <a href={'https://unruffled-kalam-55107b.netlify.app/#home'} target="_blank" rel="noopener noreferrer" className="fa fa-briefcase fa4x">
            Portfolio
              </a>
          </li>
          <li className="nav-item d-inline-block mr-4">
            <a href={'https://github.com/Luckyaremu'} target="_blank" rel="noopener noreferrer" className="fa fa-github fa4x fa4x">
            Github
              </a>
          </li>
        </ul>
      </div>
    </nav>
  </div>
);

export default HeaderDiv;
