import { configureStore } from "@reduxjs/toolkit";
import viewBusReducer from "../features/viewBus/ViewBusSlice";
import authReducer from "../features/auth/authSlice";
import routeReducer from "../features/Route/routeSlice";
import EmployeesReducer from "../features/Employees/EmployeeSlice";
import RoleReducer from "../features/Roles/RoleSlice";
import CompanyReducer from "../features/company/companySlice";
import BusReducer from "../features/buses/busSlice";
export const store = configureStore({
  reducer: {
    viewSearchedBuses: viewBusReducer,
    auth: authReducer,
    routes: routeReducer,
    employees: EmployeesReducer,
    roles: RoleReducer,
    companies: CompanyReducer,
    buses: BusReducer
  },
});
