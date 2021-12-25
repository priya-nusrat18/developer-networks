import {combineReducers} from 'redux';
import { authReducer } from './authReducer';
import {profileReducer} from './ProfileReducer'
import {alert} from './alert'
import {PostReducers} from './PostReducers'
export default combineReducers ({
     alert,
     auth:authReducer,
     profile : profileReducer,
     post : PostReducers
})