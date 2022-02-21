import { applyMiddleware, compose, createStore } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { fromJS } from 'immutable';
import rootReducer from './reducer';
import rootSaga from './saga';

export default function configureStore(initialState = {}) {
    let composeEnhancers = compose;
    const reduxSagaMonitorOptions = {};

    if (process.env.NODE_ENV !== 'production' && typeof window === 'object') {
        if (window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__)
            composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({});
    }

    const sagaMiddleware = createSagaMiddleware(reduxSagaMonitorOptions);

    const store = createStore(
        rootReducer,
        fromJS(initialState),
        composeEnhancers(applyMiddleware(sagaMiddleware)),
    );

    // Saga injection
    rootSaga.forEach((saga) => {
        sagaMiddleware.run(saga);
    });

    return store;
}
