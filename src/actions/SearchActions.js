 import {SEARCH_MOVIE, FETCH_MOVIES, FETCH_MOVIE, LOADING} from "./TypesActions";
 import axios from "axios";
 import {ApiFetch} from "../logic/ApiFetch.js";

 export const SearchMovie = text => dispatch => {
    dispatch({
        type: SEARCH_MOVIE,
        payload: text,

    })
 }

 export const FetchMovie = text => dispatch => {
    axios
    .get(`http://www.omdbapi.com/?i=tt3896198&apikey=${ApiFetch}&s=${text}`)
    .then(response => 
        dispatch({
        type: FETCH_MOVIES,
        payload: response.data.Search
    })
    )
    .catch(err => console.log(err))
 }

 export const fetchMovie = id => dispatch => {
    axios
    .get(`http://www.omdbapi.com/?i=tt3896198&apikey=${ApiFetch}&i=${id}`)
    .then(response => 
        dispatch({
        type: FETCH_MOVIE,
        payload: response.data
    })
    )
    .catch(err => console.log(err))
 }

 export const setLoading = () => {
    return {
        type: LOADING
    }
 }