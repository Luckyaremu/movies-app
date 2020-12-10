/* eslint-disable */
import React from 'react';
import { Link } from 'react-router-dom';
import headerDiv from '../../styles/HeaderDiv.css';

const HeaderDiv = () => (
  <div>
    <nav className="navbar navbar-light bg-dark mb-5">
      <div className="container">
        <div className="navbar-header">
          <a className="navbar-brand text-white text-lg brand-text" href="/"><h3 className="home">Home</h3></a>
        </div>
        <ul className="navbar-nav ml-auto text-light d-inline-block">
        <li className="nav-item d-inline-block mr-4">
            <Link to="https://unruffled-kalam-55107b.netlify.app/#home">
              {' '}
              <i className="fa fa-briefcase fa4x" id="imdb-logo" />
              Portfolio
            </Link>
          </li>
          <li className="nav-item d-inline-block mr-4">
            <Link to="https://github.com/Luckyaremu">
              <i className="fa fa-github fa4x" id="react-logo" />
              Github
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  </div>
);

export default HeaderDiv;
