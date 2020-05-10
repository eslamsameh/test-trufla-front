export const GET_PROMOTION = 'GET_PROMOTION'
export const GET_PROMOTION_SUCCESS = 'GET_PROMOTION_SUCCESS'
export const GET_PROMOTION_FAIL = 'GET_PROMOTION_FAIL';
export const CLEAR_PROMOTION = 'CLEAR_PROMOTION';

export function getPromotionsAction(params) {
    
    return {
        type: GET_PROMOTION,
    }
}

export function getPromotionSuccessAction(promotions) {
    return {
        type: GET_PROMOTION_SUCCESS,
        promotions: promotions,
    }
}

export function getPromotionFailAction(fail) {
    return {
        type: GET_PROMOTION_FAIL,
        fail: fail
    }
}

export function clearPromotionAction(fail) {
    return {
        type: CLEAR_PROMOTION
    }
}


