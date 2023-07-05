import { combineReducers } from 'redux';
import rootReducer from './rootreducer';
import Tichreducer from './tichreducer';
const ALL = combineReducers({ counter: rootReducer, age: Tichreducer });
export default ALL;
