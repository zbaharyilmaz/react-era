
//! import { legacy_createStore as createStore} from 'redux' 
//& Eğer birden fazla reducer tanımlayacaksam;
// const rootReducer = combineReducers({
//counter: counterReducer,
//user: userReducer });
//export const store = createStore(rootReducer);

import {legacy_createStore as createStore} from 'redux'
import { counterReducer } from './reducers/counterReducer'



export const store =createStore(counterReducer)

