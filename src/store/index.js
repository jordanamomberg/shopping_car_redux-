import { createStore, combineReducers } from 'redux';

import carsReducer from './cars'

//para adicionar mais reducers 

const rootReducer = combineReducers({
    cars: carsReducer
})


export default createStore(rootReducer) 