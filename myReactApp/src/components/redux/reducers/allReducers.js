import {combineReducers} from 'redux';
import { calculusReducer } from './calculusReducer';
import { fruitReducer } from './fruitReducer';

export const myReducer = combineReducers({
    vals : calculusReducer,
    fruitList : fruitReducer
})