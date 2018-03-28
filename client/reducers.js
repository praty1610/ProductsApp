import { combineReducers } from 'redux';

import { productAppReducer } from './Products/reducer';

const appReducer = combineReducers({
    productAppReducer
});

export default appReducer