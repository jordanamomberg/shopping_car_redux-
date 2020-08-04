import { createStore, combineReducers } from 'redux';

import carsReducer from './cars'
import layoutReducer from './layout'

//para adicionar mais reducers 

const rootReducer = combineReducers({
    cars: carsReducer,
    layout: layoutReducer
})


export default createStore(rootReducer) 