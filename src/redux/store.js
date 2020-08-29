import { createStore, applyMiddleware } from "redux";
import logger from "redux-logger";
import thunk from "redux-thunk";
import rootreducer from "./reducers/rootreducer";
const middleWare = applyMiddleware(thunk, logger);

const store = createStore(rootreducer, middleWare);

export default store;
