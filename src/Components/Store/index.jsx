import { createStore } from "redux";
import { combineReducers } from "redux";
import counterReducer from "./reducers/counterReducer";

const reducers = combineReducers({
    counters: counterReducer,
});

const store = createStore(reducers);

export default store;
