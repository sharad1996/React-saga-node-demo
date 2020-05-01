import { createStore, applyMiddleware } from 'redux'
import createSagaMiddleware from 'redux-saga'

import rootReducer from '../reducers'
import rootSaga from '../sagas' 

// create the saga middleware
const sagaMiddleware = createSagaMiddleware();

const store = createStore(
                rootReducer,
                applyMiddleware(sagaMiddleware),
              );

// then run the saga
sagaMiddleware.run(rootSaga);

export default store;