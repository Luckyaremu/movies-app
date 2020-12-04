import React from 'react';

const HeaderDiv = () => (
  <div>
    <nav className="navbar navbar-light bg-dark mb-5">
      <div className="container">
        <div className="navbar-header">
          <a className="navbar-brand text-white text-lg brand-text" href="www.facebook.com">Home</a>
        </div>
        <ul className="navbar-nav ml-auto text-light d-inline-block">
          <li className="nav-item d-inline-block mr-4">
            <i className="fa fa-film fa-5x" id="imdb-logo" />
          </li>
          <li className="nav-item d-inline-block mr-4">
            <i className="fa fa-search fa-5x" id="react-logo" />
          </li>
        </ul>
      </div>
    </nav>
  </div>
);

export default HeaderDiv;
