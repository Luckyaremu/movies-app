/* eslint-disable no-case-declarations */
/* eslint-disable consistent-return */
/* eslint-disable */
import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import rootReducer from '../reducers/index';

const middleware = [thunk];
const initialState = {};

const store = createStore(rootReducer,
  initialState,
  composeWithDevTools(applyMiddleware(...middleware)));

export default store;
