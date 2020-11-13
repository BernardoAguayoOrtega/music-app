import { createStore, combineReducers } from 'redux';
import { music } from './reducers';

const reducers = {
  music,
};

const rootReducer = combineReducers(reducers);

export const configureStore = () => createStore(rootReducer);
