import {createStore, combineReducers, applyMiddleware, compose} from 'redux';
import weatherReducer from '../reducers/weatherReducer';
import thunk from 'redux-thunk';

const rootReducer = combineReducers({weather: weatherReducer});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const configureStore = () => {
  return createStore(rootReducer, composeEnhancers(applyMiddleware(thunk)));
};
export default configureStore;
