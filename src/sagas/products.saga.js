
import { put, call } from 'redux-saga/effects';
import { ProductService } from '../services/poducts.service';
import { getProductsCountSuccessAction, getProductCountFailAction, getProductSuccessAction, getProductFailAction } from '../redux/actions/products.actions';

export function* getProductCountSaga(action) {
    try {
        const response = yield call(ProductService.getProductsCounts, action.params);
        yield put(getProductsCountSuccessAction({ count: response.data.products }))
    } catch (error) {
        yield put(getProductCountFailAction({ count: error.response.data }))
    }
}

export function* getProductsSaga(action) {
    try {
        const response = yield call(ProductService.getProducts, action.params);
        yield put(getProductSuccessAction({ products: response.data.products }))
    } catch (error) {
        yield put(getProductFailAction({ products: error.response.data }))
    }
}



