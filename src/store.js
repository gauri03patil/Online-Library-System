import { createStore } from 'redux';
import { bookReducer } from './Redux/bookReducer';
const store = createStore(bookReducer);
export default store;