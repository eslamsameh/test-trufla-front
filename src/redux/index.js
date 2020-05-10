import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import rootSaga from '../sagas/index';
import rootReducer from './reducer/index';

const sagaMiddleware = createSagaMiddleware();
export const createStoreWithMiddleware = createStore(rootReducer,applyMiddleware(sagaMiddleware))
sagaMiddleware.run(rootSaga);

