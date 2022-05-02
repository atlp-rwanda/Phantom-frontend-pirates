
import phantomApi from '../../api/api'
// import axios from 'axios';

// const instance = axios.create({
//   withCredentials: true,
//   baseURL: 'http://phantom-api-pirates.herokuapp.com/',
// })

// instance.post('api/routes',rout)
// Create new route
const createRoute = async (routeData) => {

  const response = await phantomApi.post('api/routes', routeData, {
    withCredentials: true,
    headers: {'Access-Control-Allow-Origin': '*', 'Content-Type': 'application/json'}
  })

  return response.data
}

// Get user route
const getRoutes = async () => {
  const response = await phantomApi.get('api/routes')

  return response.data
}

// Delete user route
const deleteRoute = async (routeId) => {
  const response = await phantomApi.delete(API_URL + routeId)

  return response.data
}

const routeService = {
  createRoute,
  getRoutes,
  deleteRoute,
}

export default routeService
