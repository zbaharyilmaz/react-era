
//? import { legacy_createStore as createStore} from 'redux' 
import { combineReducers, legacy_createStore } from 'redux'
import { counterReducer } from './reducers/counterReducer'

const counterReducer =combineReducers({

    counterR=counterReducer //zarfdışı-zarfiçi

})

export const store = legacy_createStore(counterReducer)
