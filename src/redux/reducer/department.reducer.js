import { GET_DEPARTMENT, GET_DEPARTMENT_SUCCESS, GET_DEPARTMENT_FAIL, CLEAR_DEPARTMENT } from "../actions/department.action";

const initialState = {
    departments: [],
    fail: null
}
export default function (state = initialState, action) {
    // eslint-disable-next-line default-case
    switch (action.type) {
        case GET_DEPARTMENT: { return { ...state } }
        case GET_DEPARTMENT_SUCCESS: { return { ...state, departments: action.departments, fail: null } }
        case GET_DEPARTMENT_FAIL: { return { ...state, fail: action.fail, departments: [] }; }
        case CLEAR_DEPARTMENT: { return { ...state, fail: null, departments: [] }; }


    }
    return state
}