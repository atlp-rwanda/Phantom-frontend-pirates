import { configureStore } from '@reduxjs/toolkit';
import viewBusReducer from '../features/viewBus/ViewBusSlice';
import authReducer from '../features/auth/authSlice';
import routeReducer from '../features/Route/routeSlice';
import companyReducer from '../features/company/companySlice';
import busReducer from '../features/bus/busSlice';
export const store = configureStore({
  reducer: {
    viewSearchedBuses: viewBusReducer,
    auth: authReducer,
    routes: routeReducer,
    companies: companyReducer,
    buses: busReducer
  },
});
