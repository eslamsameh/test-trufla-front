import { GET_PROMOTION, GET_PROMOTION_SUCCESS, GET_PROMOTION_FAIL, CLEAR_PROMOTION } from "../actions/promotion.action";

const initialState = {
    promotions: [],
    fail: null
}
export default function (state = initialState, action) {
    // eslint-disable-next-line default-case
    switch (action.type) {
        case GET_PROMOTION: { return { ...state } }
        case GET_PROMOTION_SUCCESS: { return { ...state, promotions: action.promotions, fail: null } }
        case GET_PROMOTION_FAIL: { return { ...state, fail: action.fail, promotions: [] }; }
        case CLEAR_PROMOTION: { return { ...state, fail: null, promotions: [] }; }
    }
    return state
}