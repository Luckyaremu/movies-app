/* eslint-disable no-case-declarations */
/* eslint-disable consistent-return */
/* eslint-disable */
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import movieCard from "../../styles/MovieCard.css"

export class MovieCard extends Component {
  render() {
    const { movie } = this.props;
    console.log(movie);
    return (
      <div className="col-md-4 mb-5">
        <div className="card card-body bg-dark text-center h-100">
          <img className="w-100 mb-2" src={movie.Poster} alt="Movie Cover" />
          <h5 className="text-light card-title">
            {movie.Title}
            {' '}
            -
            {movie.Year}
          </h5>
          <Link className="btn btn-primary" to={`/movie/${movie.imdbID}`}>
            Movie Details
            <i className="fa fa-folder-open" />
          </Link>
        </div>
      </div>
    );
  }
}

export default MovieCard;