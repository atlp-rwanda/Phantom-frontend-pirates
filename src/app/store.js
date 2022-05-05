import { configureStore } from '@reduxjs/toolkit';
import viewBusReducer from '../features/viewBus/ViewBusSlice';
<<<<<<< HEAD
import authReducer from '../features/auth/authSlice';
import routeReducer from '../features/Route/routeSlice';
export const store = configureStore({
  reducer: {
    viewSearchedBuses: viewBusReducer,
    auth: authReducer,
    routes: routeReducer
=======
import EmployeesReducer from '../features/Employees/EmployeeSlice';
import authReducer from '../features/auth/authSlice'
export const store = configureStore({
  reducer: {
    viewSearchedBuses: viewBusReducer,
    auth:authReducer,
    employees: EmployeesReducer
>>>>>>> 154c6efff39ce338054c596f2b4721a92e9fd80c
  },
});
