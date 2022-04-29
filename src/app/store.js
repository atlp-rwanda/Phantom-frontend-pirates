import { configureStore } from '@reduxjs/toolkit';
import viewBusReducer from '../features/viewBus/ViewBusSlice';
import authReducer from '../features/auth/authSlice';
import roleReducer from '../features/setPermission/setPermissionSlice';

export const store = configureStore({
  reducer: {
    viewSearchedBuses: viewBusReducer,
    auth: authReducer,
    rolesPermissions: roleReducer,
  },
});
