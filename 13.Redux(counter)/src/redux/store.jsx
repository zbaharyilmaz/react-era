import { combineReducers, legacy_createStore as createStore } from "redux";
import counterReducer from "./reducers/counterReducer";


const topluReducer=combineReducers({

    counterReducer:counterReducer,
})


export const store = createStore(topluReducer);
