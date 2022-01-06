import { createStore } from "redux";
import { combineReducers } from "redux";
import counterReducer from "./reducers/counterReducer";
import apiReducer from "./reducers/apiReducer";

const reducers = combineReducers({
    counters: counterReducer,
    api: apiReducer,
});

const store = createStore(reducers);

export default store;
