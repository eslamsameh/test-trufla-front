export const GET_PRODUCTS = 'GET_PRODUCTS'
export const GET_PRODUCTS_COUNT = 'GET_PRODUCT_COUNT'
export const GET_PRODUCTS_COUNT_SUCCESS = 'GET_PRODUCTS_COUNT_SUCCESS';
export const GET_PRODUCTS_COUNT_FAIL = "GET_PRODUCTS_COUNT_FAIL";
export const GET_PRODUCTS_SUCCESS = 'GET_PRODUCTS_SUCCESS';
export const GET_PRODUCTS_FAIL = 'GET_PRODUCTS_FAIL';
export const CLEAR_PRODUCTS_AND_PARAMS = 'CLEAR_PRODUCTS_AND_PARAMS';
export function getProductsCountAction(params) {
    
    return {
        type: GET_PRODUCTS_COUNT,
        params: params
    }
}

export function getProductsCountSuccessAction(count) {
    return {
        type: GET_PRODUCTS_COUNT_SUCCESS,
        count: count,
    }
}

export function getProductCountFailAction(fail) {
    return {
        type: GET_PRODUCTS_COUNT_FAIL,
        fail: fail
    }
}

export function getProductsAction(params) {
    return {
        type: GET_PRODUCTS,
        params: params
    }
}
export function getProductSuccessAction(products) {
    return {
        type: GET_PRODUCTS_SUCCESS,
        products: products
    }
}

export function getProductFailAction(fail) {
    return {
        type: GET_PRODUCTS_FAIL,
        fail: fail
    }
}

export function clearProductsAndParams(fail) {
    return {
        type: CLEAR_PRODUCTS_AND_PARAMS
    }
}


