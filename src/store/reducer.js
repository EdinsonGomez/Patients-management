import { combineReducers } from '@reduxjs/toolkit';
import patientsListReducer from './patientsListSlice';
import patientReducer from './patientSlice';
import userReducer from './userSlice';

const reducer = combineReducers({
  patientsList: patientsListReducer,
  patient: patientReducer,
  user: userReducer,
});

export default reducer;