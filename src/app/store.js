import { configureStore } from '@reduxjs/toolkit';
import viewBusReducer from '../features/viewBus/ViewBusSlice';
import authReducer from '../features/auth/authSlice';
import roleReducer from '../features/roles/RoleSlice';

export const store = configureStore({
  reducer: {
    viewSearchedBuses: viewBusReducer,
    auth: authReducer,
    rolesData: roleReducer,
  },
});
