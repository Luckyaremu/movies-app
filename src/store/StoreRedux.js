import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { composedWithDevTools } from "redux-devtools-extension/developmentOnly";
import rootReducer from "./reducer"


const middleware = [thunk];
const initialState = {};

const StoreRedux = createStore(rootReducer, middleware, composedWithDevTools(applyMiddleware(...middleware)));

export default StoreRedux;