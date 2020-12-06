import React from 'react';
import Icofont from 'react-icofont';
import { Link } from 'react-router-dom';
import '../../styles/Footer.css';

const FooterDiv = () => (
  <footer className="page-footer bg-dark font-small mdb-color lighten-3 pt-4">

    <div className="container text-center text-md-left">

      <div className="row">

        <div className="col-md-4 col-lg-3 mr-auto my-md-4 my-0 mt-4 mb-1">

          <h5 className="font-weight-bold text-uppercase mb-4">Footer Content</h5>
          <p>Here you can find some of my personal informations....</p>
          <p>
            Thins project is just to test my knowledge of react and redux using API and
            i think i gave the project my best
          </p>

        </div>

        <hr className="clearfix w-100 d-md-none" />

        <div className="col-md-2 col-lg-2 mx-auto my-md-4 my-0 mt-4 mb-1">

          <h5 className="font-weight-bold text-uppercase mb-4">About</h5>

          <ul className="list-unstyled">
            <li>
              <p>
                <Link to="https://unruffled-kalam-55107b.netlify.app/#project">PROJECTS</Link>
              </p>
            </li>
            <li>
              <p>
                <Link to="https://unruffled-kalam-55107b.netlify.app/#about">ABOUT US</Link>
              </p>
            </li>
            <li>
              <p>
                <Link to="#!">BLOG</Link>
              </p>
            </li>
            <li>
              <p>
                <Link to="#!">AWARDS</Link>
              </p>
            </li>
          </ul>

        </div>

        <hr className="clearfix w-100 d-md-none" />

        <div className="col-md-4 col-lg-3 mx-auto my-md-4 my-0 mt-4 mb-1">

          <h5 className="font-weight-bold text-uppercase mb-4">Address</h5>

          <ul className="list-unstyled">
            <li>
              <p>
                <Icofont icon="home" />
                {' '}
                Lagos, Nigeria.
              </p>
            </li>
            <li>
              <p>
                <Icofont icon="envelope" />
                {' '}
                aremu.baba70@gmail.com
              </p>
            </li>
            <li>
              <p>
                <Icofont icon="phone" />
                {' '}
                + 2348032236791
              </p>
            </li>
            <li>
              <p>
                <Icofont icon="print" />
                {' '}
                + 2348032236791
              </p>
            </li>
          </ul>

        </div>

        <hr className="clearfix w-100 d-md-none" />

        <div className="col-md-2 col-lg-2 text-center mx-auto my-4">

          <h5 className="font-weight-bold text-uppercase mb-4">Follow Us</h5>

          <button type="button" className="btn-floating btn-fb">
            <Icofont icon="facebook" />
          </button>
          <button type="button" className="btn-floating btn-tw">
            <Icofont icon="twitter" />
          </button>
          <button type="button" className="btn-floating btn-dribbble">
            <Icofont icon="linkedin" />
          </button>

        </div>

      </div>

    </div>

    <div className="footer-copyright text-center py-3">
      © 2020 Copyright:
      <Link to="https://unruffled-kalam-55107b.netlify.app/#home" className="text-whiteout" target="_blank"> Aremu Lucky Baba</Link>
    </div>

  </footer>
);

export default FooterDiv;
