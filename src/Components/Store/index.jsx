import { createStore } from "redux";
import { combineReducers } from "redux";
import counterReducer from "./reducers/counterReducer";
import apiReducer from "./reducers/apiReducer";
import currencyReducer from "./reducers/currencyReducer";
import attributeReducer from "./reducers/attributeReducer";
import priceReducer from "./reducers/totalPrice";

const reducers = combineReducers({
    counters: counterReducer,
    api: apiReducer,
    currency: currencyReducer,
    attribute: attributeReducer,
    price: priceReducer,
});

const store = createStore(reducers);

export default store;
