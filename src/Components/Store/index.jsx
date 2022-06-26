import { createStore } from "redux";
import { combineReducers } from "redux";
import counterReducer from "./reducers/counterReducer";
import apiReducer from "./reducers/apiReducer";
import filterReducer from "./reducers/filterReducer";
import currencyReducer from "./reducers/currencyReducer";
import attributeReducer from "./reducers/attributeReducer";
import priceReducer from "./reducers/totalPrice";
import { persistStore, persistReducer, createTransform } from "redux-persist";
import storage from "redux-persist/lib/storage";
import { parse, stringify } from "flatted";

const transformCircular = createTransform(
    (inboundState, key) => stringify(inboundState),
    (outboundState, key) => parse(outboundState)
);

const persistConfig = {
    key: "root",
    storage,
    transforms: [transformCircular],
};

const reducers = combineReducers({
    counters: counterReducer,
    api: apiReducer,
    currency: currencyReducer,
    attribute: attributeReducer,
    price: priceReducer,
    filters: filterReducer,
});

const persistedReducer = persistReducer(persistConfig, reducers);

const store = createStore(persistedReducer);
const persistor = persistStore(store);

export { store, persistor };
