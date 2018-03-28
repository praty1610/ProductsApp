import { PRODUCT_LIST } from './actions';

const initialState = {
    productsList : []
};

export const productAppReducer = (state = initialState, action) =>  {
    switch(action.type) {
        case PRODUCT_LIST:
            return Object.assign({}, state, { productsList : action.data});
        default:
            return state 
    }
}