import {combineReducers} from 'redux';
import cityReducer from './cityReducer';
import itineraryReducer from './itineraryReducer';
import userReducer from './userReducer';
import activityReducer from './activityReducer';

const mainReducer=combineReducers({
     cityReducer,
     itineraryReducer,
     userReducer,
     activityReducer
})

export default mainReducer;