/* eslint-disable no-case-declarations */
/* eslint-disable consistent-return */
/* eslint-disable */
import React, { Component } from 'react';
import { connect } from 'react-redux';
import MovieCard from './MovieCard';
import Error from "./Error"

export class MoviesContainer extends Component {
  render() {
    const { movies } = this.props;
    let content = '';
    content = movies.Response == 'True'
      ? movies.Search.map((movie, index) => <MovieCard key={index} movie={movie} />) : null;

    return (
      <div className="row">
        {content}
      </div>
    );
  }
}
const mapStateToProps = state => ({
  movies: state.movies.movies,
});
export default connect(mapStateToProps)(MoviesContainer);
