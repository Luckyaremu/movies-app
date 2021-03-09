/* eslint-disable no-case-declarations */
/* eslint-disable consistent-return */
/* eslint-disable */
import React, { Component } from 'react';
import { connect } from 'react-redux';
import SearchForm from './SearchForm';
import Spinner from '../header&footer/Spinner';
import MoviesContainer from './MoviesContainer';

export class LandingPage extends Component {
  render() {
    const { loading } = this.props;
    return (
      <div className="container">
        <SearchForm />
        {loading ? <Spinner /> : <MoviesContainer />}
      </div>
    );
  }
}
const mapStateToProps = state => ({
  loading: state.movies.loading,
});
LandingPage.propTypes = {
  landing: PropTypes.shape.isRequired,
};
export default connect(mapStateToProps)(LandingPage);
