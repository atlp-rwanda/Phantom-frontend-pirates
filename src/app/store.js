import { configureStore } from '@reduxjs/toolkit';
import viewBusReducer from '../features/viewBus/ViewBusSlice';
import { phantomApi } from '../services/phantomApi';

export const store = configureStore({
  reducer: {
    viewSearchedBuses: viewBusReducer,
    [phantomApi.reducerPath]: phantomApi.reducer,
  },
});
