import { all, takeLatest } from 'redux-saga/effects';
import { GET_PRODUCTS_COUNT, GET_PRODUCTS } from '../redux/actions/products.actions';
import { getProductsSaga, getProductCountSaga } from './products.saga';
import { GET_DEPARTMENT } from '../redux/actions/department.action';
import { getDepartmentSaga } from './department.saga';
import { GET_PROMOTION } from '../redux/actions/promotion.action';
import { getPromotionSaga } from './promotion.saga';

export default function* indexSaga() {
    yield all([
        yield takeLatest(GET_PRODUCTS_COUNT, getProductCountSaga),
        yield takeLatest(GET_PRODUCTS, getProductsSaga),
        yield takeLatest(GET_DEPARTMENT, getDepartmentSaga),
        yield takeLatest(GET_PROMOTION, getPromotionSaga),

    ]);
}