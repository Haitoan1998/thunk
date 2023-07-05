import { createStore } from 'redux';
import rootReducer from './rootreducer';
import ALL from './REDUCERCHUNG';
const store = createStore(ALL);
export default store;
