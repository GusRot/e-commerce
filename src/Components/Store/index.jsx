import { createStore } from "redux";
import { combineReducers } from "redux";
import counterReducer from "./reducers/counterReducer";
import apiReducer from "./reducers/apiReducer";
import currencyReducer from "./reducers/currencyReducer";
import attributeReducer from "./reducers/attributeReducer";
import priceReducer from "./reducers/totalPrice";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

const persistConfig = {
    key: "root",
    storage,
};

const reducers = combineReducers({
    counters: counterReducer,
    api: apiReducer,
    currency: currencyReducer,
    attribute: attributeReducer,
    price: priceReducer,
});

const persistedReducer = persistReducer(persistConfig, reducers);

const store = createStore(persistedReducer);
const persistor = persistStore(store);

export { store, persistor };
