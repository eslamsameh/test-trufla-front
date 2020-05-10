import { combineReducers } from 'redux';

import Products from './products.reducer';
import Department from './department.reducer';
import Promotion from './promotion.reducer';
const rootReducer = combineReducers({
   products: Products,
   departments: Department,
   promotions: Promotion
})

export default rootReducer