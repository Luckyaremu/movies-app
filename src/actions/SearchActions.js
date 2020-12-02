 import {SEARCH_MOVIE, FETCH_MOVIE} from "./TypesActions";
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
        type: FETCH_MOVIE,
        payload: response.data.Search
    })
    )
    .catch(err => console.log(err))
 }
