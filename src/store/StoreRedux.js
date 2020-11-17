import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { composedWithDevTools } from "redux-devtools-extension/developmentOnly";
import rootReducer from "../reducers/index"


const middleware = [thunk];
const initialState = {};

const StoreRedux = createStore(rootReducer, initialState, composedWithDevTools(applyMiddleware(...middleware)));

export default StoreRedux;