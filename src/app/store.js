import { configureStore } from '@reduxjs/toolkit';
import viewBusReducer from '../features/viewBus/ViewBusSlice';
import authReducer from '../features/auth/authSlice';
import routeReducer from '../features/Route/routeSlice';
import EmployeesReducer from '../features/Employees/EmployeeSlice';

export const store = configureStore({
  reducer: {
    viewSearchedBuses: viewBusReducer,
    auth: authReducer,
    routes: routeReducer,
    employees: EmployeesReducer
  },
});
