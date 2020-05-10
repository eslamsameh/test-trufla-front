import { GET_PRODUCTS_COUNT, GET_PRODUCTS_COUNT_SUCCESS, GET_PRODUCTS_COUNT_FAIL, GET_PRODUCTS, GET_PRODUCTS_SUCCESS, GET_PRODUCTS_FAIL, CLEAR_PRODUCTS_AND_PARAMS } from "../actions/products.actions";

const initialState = {
    products: [],
    params: null,
    count: null,
    fail: null
}
export default function (state = initialState , action) {
    // eslint-disable-next-line default-case
    switch (action.type) {
        case GET_PRODUCTS_COUNT: { return {...state, params: action.params, count: null} }
        case GET_PRODUCTS_COUNT_SUCCESS: {return { ...state, count: action.count } }
        case GET_PRODUCTS_COUNT_FAIL: { return { ...state, fail: action.fail, count: null }; }
        case GET_PRODUCTS: { return { ...state, params: action.params } }
        case GET_PRODUCTS_SUCCESS: { return { ...state, products: action.products } }
        case GET_PRODUCTS_FAIL: { return { ...state, fail: action.fail } }
        case CLEAR_PRODUCTS_AND_PARAMS: { return { ...state, products: [], fail: null, params: null, count: null  } }
    }
    return state
}