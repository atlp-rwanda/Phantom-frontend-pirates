import { configureStore } from '@reduxjs/toolkit';
import viewBusReducer from '../features/viewBus/ViewBusSlice';
import EmployeesReducer from '../features/Employees/EmployeeSlice';
import authReducer from '../features/auth/authSlice';

export const store = configureStore({
  reducer: {
    viewSearchedBuses: viewBusReducer,
    auth:authReducer,
    employees: EmployeesReducer
  },
});
