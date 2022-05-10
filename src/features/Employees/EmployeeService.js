// import phantomApi from "../../api/api";

// // Register user
// const addEmployee = async (employeeData) => {
//   const response = await phantomApi.post("employees/3", employeeData, {
//     withCredentials: true,
//     headers: {
//       "Access-Control-Allow-Origin": "*",
//       "Content-Type": "application/json",
//     },
//   });

//   return response.data;
// };

// // Get user route
// const getEmployees = async () => {
//   const response = await phantomApi.get("employees/list");

//   return response.data;
// };

// // Delete user route
// /* const deleteRoute = async (routeId) => {
//   const response = await phantomApi.delete(API_URL + routeId);

//   return response.data;
// }; */

// const employeeService = {
//   addEmployee,
//   getEmployees,
// };

// export default employeeService;
