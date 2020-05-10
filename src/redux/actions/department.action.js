export const GET_DEPARTMENT = 'GET_DEPARTMENT'
export const GET_DEPARTMENT_SUCCESS = 'GET_DEPARTMENT_SUCCESS'
export const GET_DEPARTMENT_FAIL = 'GET_DEPARTMENT_FAIL';
export const CLEAR_DEPARTMENT = 'CLEAR_DEPARTMENT';

export function getDepartmentsAction(params) {
    
    return {
        type: GET_DEPARTMENT,
    }
}

export function getDepartmentSuccessAction(departments) {
    return {
        type: GET_DEPARTMENT_SUCCESS,
        departments: departments,
    }
}

export function getDepartmentFailAction(fail) {
    return {
        type: GET_DEPARTMENT_FAIL,
        fail: fail
    }
}

export function clearDepartmentAction(fail) {
    return {
        type: CLEAR_DEPARTMENT
    }
}


