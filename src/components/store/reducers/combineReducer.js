import { combineReducers } from 'redux';
import postReducer from './postReducer';
import userLoginReducer from './userLoginReducer';
import userReducer from './userReducer';


 
export const reducer = combineReducers({ post: postReducer, userLoginReducer, userReducer });
