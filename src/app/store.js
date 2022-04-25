import { configureStore } from '@reduxjs/toolkit';
import { phantomApi } from '../services/phantomApi';

import viewBusReducer from '../features/viewBus/ViewBusSlice';
import authReducer from '../features/auth/authSlice'

export const store = configureStore({
  reducer: {
    viewSearchedBuses: viewBusReducer,
    auth: authReducer,
    [phantomApi.reducerPath]: phantomApi.reducer,
  },
});

