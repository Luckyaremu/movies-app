 import {SEARCH_MOVIE} from "./TypesActions";

 export const SearchMovie = text => dispatch => {
    dispatch({
        type: SEARCH_MOVIE,
        payload: text,

    })
 }
