import {ADD_TO_CART} from './types';

const addToCart = (productId,state) =>{
    return {
        ...state,
        productList: state.productList.map((single) => (single.id === productId) ? {
            ...single,
            count: single.count + 1
        } : single)
    }
}

export default (state,action)=>{
    console.log("->>", action)
    switch (action.type) {
        case ADD_TO_CART:
            return addToCart(action.payload, state);
        default:
            return state;
    }
}
