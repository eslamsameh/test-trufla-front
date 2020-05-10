
import { put, call } from 'redux-saga/effects';
import { DepartmentService } from '../services/department.service';
import { getDepartmentSuccessAction, getDepartmentFailAction } from '../redux/actions/department.action';

export function* getDepartmentSaga(action) {
    try {
        const response = yield call(DepartmentService.getDepartments);
        yield put(getDepartmentSuccessAction({ departments: response.data.departments }))
    } catch (error) {
        yield put(getDepartmentFailAction({ fail: error.response.data }))
    }
}





