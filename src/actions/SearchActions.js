/* eslint-disable no-case-declarations */
/* eslint-disable consistent-return */
/* eslint-disable */
import axios from 'axios';
import {
  SEARCH_MOVIE, FETCH_MOVIES, FETCH_MOVIE, LOADING,
} from './TypesActions';
import { ApiFetch } from '../logic/ApiFetch.js';

export const SearchMovie = text => dispatch => {
  dispatch({
    type: SEARCH_MOVIE,
    payload: text,

  });
};

export const fetchMovies = text => dispatch => {
  axios
    .get(`https://www.omdbapi.com/?i=tt3896198&apikey=${ApiFetch}&s=${text}`)
    .then(response => dispatch({
      type: FETCH_MOVIES,
      payload: response.data,
    }))
    .catch(err => console.log(err));
};

export const fetchMovie = id => dispatch => {
  axios
    .get(`https://www.omdbapi.com/?apikey=${ApiFetch}&i=${id}`)
    .then(response => dispatch({
      type: FETCH_MOVIE,
      payload: response.data,
    }))
    .catch(err => console.log(err));
};

export const setLoading = () => ({
  type: LOADING,
});
