import axios from 'axios'
import Cookies from 'universal-cookie'
import phantomApi from '../../api/api'

const cookies = new Cookies();

// Login user
const login = async (userData) => {
  console.log(process.env.REACT_APP_BACKEND_URL);
  const response = await phantomApi.post('users/login', userData)
  console.log(response.data);
  if (response.data) {
    if(response.data.adminToken){
       cookies.set('jwt', response.data.adminToken);
    }else if (response.data.operatorToken) {
      cookies.set('jwt', response.data.operatorToken);
    } else {
      cookies.set('jwt', response.data.driverToken);
    }
   
  }

  return response.data
}
// Logout user
const logout = () => {
  cookies.remove('user');
}

const authService = {
  logout,
  login,
}

export default authService
