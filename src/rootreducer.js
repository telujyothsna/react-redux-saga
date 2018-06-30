import { combineReducers } from 'redux';
import home from './containers/home/home.reducer';

const root = combineReducers({
    home,
})

export default root;