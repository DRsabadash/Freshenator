import { createStore, applyMiddleware, compose } from 'redux';
import logger from 'redux-logger';
import thunk from 'redux-thunk';
import rootReducer from '../reducers/rootReducer';

export default function configureStore() {
  const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

	if (process.env.NODE_ENV === 'developmentWithTools') {
		return createStore(
			rootReducer,
      composeEnhancers(applyMiddleware(thunk, logger)),
    );
	} else {
		return createStore(
			rootReducer,
			applyMiddleware(thunk),
		);
	}
}
