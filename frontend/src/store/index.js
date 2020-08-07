import { configureStore } from '@reduxjs/toolkit';

import carsReducer from './ducks/cars'
import layoutReducer from './ducks/layout'
import cartReducer from './ducks/cart';

//para adicionar mais reducers
// const rootReducer = combineReducers({
//     cars: carsReducer,
//     layout: layoutReducer
// })

export default configureStore({
    reducer: {
        cars: carsReducer,
        layout: layoutReducer
    }
});

// export default createStore(rootReducer)