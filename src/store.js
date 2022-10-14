import {createStore} from 'redux'
import nav_reducer from './Components/navbar/reducer';

const store = createStore(nav_reducer);

export default store;