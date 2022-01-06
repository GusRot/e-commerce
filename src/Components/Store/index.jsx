import { createStore } from "redux";
import { combineReducers } from "redux";
import counterReducer from "./reducers/counterReducer";
import apiReducer from "./reducers/apiReducer";
import currencyReducer from "./reducers/currencyReducer";
import attributeReducer from "./reducers/attributeReducer";

const reducers = combineReducers({
    counters: counterReducer,
    api: apiReducer,
    currency: currencyReducer,
    attribute: attributeReducer,
});

const store = createStore(reducers);

export default store;
