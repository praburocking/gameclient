import {createStore,combineReducers} from 'redux'
import serverConfigReducer from './serverConfig'
import userReducer from './user'
import thunk from 'redux-thunk'
import { applyMiddleware } from 'redux'


const combine_reducer=combineReducers({

    serverConfig:serverConfigReducer,
    user:userReducer,
})


const store=createStore(combine_reducer,applyMiddleware(thunk));
export default store; 