
import { put, call } from 'redux-saga/effects';
import { PromotionService } from '../services/promotion.service';
import {getPromotionSuccessAction, getPromotionFailAction} from '../redux/actions/promotion.action'
export function* getPromotionSaga(action) {
    try {
        const response = yield call(PromotionService.getPromotions);
        yield put(getPromotionSuccessAction({ promotions: response.data.promotions }))
    } catch (error) {
        yield put(getPromotionFailAction({ fail: error.response.data }))
    }
}





