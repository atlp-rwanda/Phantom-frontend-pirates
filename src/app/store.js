import { configureStore } from '@reduxjs/toolkit';
import viewBusReducer from '../features/viewBus/ViewBusSlice';

export const store = configureStore({
  reducer: {
    viewSearchedBuses: viewBusReducer,
  },
});
