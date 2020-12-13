/* eslint-disable no-case-declarations */
/* eslint-disable consistent-return */
/* eslint-disable */

import React, { Component } from 'react';
import { connect } from 'react-redux';
import { SearchMovie, fetchMovies, setLoading } from '../../actions/SearchActions';
import searchform from "../../styles/SearchForm.css"

export class SearchForm extends Component {
    onChange = e => {
      this.props.SearchMovie(e.target.value);
    };

    onSubmit = e => {
      e.preventDefault();
      this.props.fetchMovies(this.props.text);
      this.props.setLoading();
    }

    render() {
      return (
        <div className="jumbotron jumbotron-fluid mt-5 text-center">
          <div className="container">
            <h3 className="displa-4 mb-3">
              <i className="fa fa-search" />
              {' '}
              Search for movie
            </h3>
            <form id="SearchForm" onSubmit={this.onSubmit}>
              <input
                type="text"
                className="form-control"
                name="SearchText"
                placeholder="Search Movies ......"
                onChange={this.onChange}
              />
              <button type="submit" className="btn btn-primary btn-bg mt-3">
                Search Movies
              </button>
            </form>
          </div>
        </div>
      );
    }
}

const mapStateToProps = state => ({
  text: state.movies.text,
});

export default connect(mapStateToProps, { SearchMovie, fetchMovies, setLoading })(SearchForm);
