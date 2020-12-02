import {SEARCH_MOVIE, FETCH_MOVIE}  from "../actions/TypesActions";

const initialState = {
    text: '',
    movies: [],
    loading: false,
    movie: []
};

const SearchReducer = (state = initialState, action) => {
    switch (action.type) {
        case SEARCH_MOVIE:
            return {
                ...state,
                text: action.payload,
                loading: false
            };
            case FETCH_MOVIE:
            return {
                ...state,
                movies: action.payload,
            };
            default:
                return state
    }
}

export default SearchReducer;