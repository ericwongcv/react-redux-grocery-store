const ADD_TO_CART = 'cart/ADD_TO_CART';
const REMOVE_FROM_CART = 'cart/REMOVE_FROM_CART';
const INCREASE_COUNT = 'cart/INCREASE_COUNT';
const DECREASE_COUNT = 'cart/DECREASE_COUNT';
const SET_COUNT_VALUE = 'cart/SET_COUNT_VALUE';

export const getAllCartItems = (state) => Object.values(state.cart);

export const addToCart = (id) => {
    return {
        type: ADD_TO_CART,
        id
    };
};

export const removeFromCart = (id) => {
    return {
        type: REMOVE_FROM_CART,
        id
    };
};

export const increaseCount = (id) => {
    return {
        type: INCREASE_COUNT,
        id
    };
};

export const decreaseCount = (id) => {
    return {
        type: DECREASE_COUNT,
        id
    };
};

export const setCountValue = (id, value) => {
    return {
        type: SET_COUNT_VALUE,
        id,
        value
    }
}


export default function cartReducer(state = {}, action) {
    switch (action.type) {

        case ADD_TO_CART:
            const newStateAdd = {
                ...state
            };
            if (newStateAdd[action.id]) {
                newStateAdd[action.id]["count"]++;
            } else {
                newStateAdd[action.id] = { id: action.id, count: 1 }
            }
            return newStateAdd;

        case REMOVE_FROM_CART:
            const newStateRemove = {...state}
            delete newStateRemove[action.id]
            return newStateRemove;

        case INCREASE_COUNT:
            const newStateIncrease = {...state}
            newStateIncrease[action.id]['count']++;
            return newStateIncrease;

        case DECREASE_COUNT:
            const newStateDecrease = {...state}
            if (newStateDecrease[action.id]['count'] > 0) newStateDecrease[action.id]['count']--;
            return newStateDecrease;

        case SET_COUNT_VALUE:
            const newStateSetCount = {...state}
            newStateSetCount[action.id]['count'] = action.value;
            return newStateSetCount;

        default:
            return state;
    }
}
