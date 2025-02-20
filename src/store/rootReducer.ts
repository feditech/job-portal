import { combineReducers, Reducer } from '@reduxjs/toolkit';

import storage from 'redux-persist/lib/storage';
import { persistReducer } from 'redux-persist';
import { createFilter } from 'redux-persist-transform-filter';
import { userReducer } from '../slices/users';

export const rootReducer: Reducer<{
  users: {
    loading: boolean;
    getClaimsListData: never[];
    getuserLoading: boolean;
    getclaimDataId: never[];
    modalToggle: boolean;
    userLoader: boolean;
    userData: never[];
  };
}> = combineReducers({ users: userReducer });

const saveOtpResendTimerFilter = createFilter('auth', ['otpresendtimer']);
const saveCheckinTimerFilter = createFilter('schedule', [
  'checkintimer',
  'checkintimerend',
]);

export const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['auth', 'schedule'],
  transforms: [saveOtpResendTimerFilter, saveCheckinTimerFilter],
};

export const persistedReducer = persistReducer(persistConfig, rootReducer);
