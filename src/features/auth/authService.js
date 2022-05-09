import Cookies from 'universal-cookie'
import phantomApi from '../../api/api'

const cookies = new Cookies();
// Register user
const register = async (userData) => {
    const { firstname, lastname, email } = userData;
    const response = await phantomApi.post("employees/3",{firstname,lastname,email})
   /*  if(response.data) {
        localStorage.setItem('user', JSON.stringify(response.data))
    } */

    return response.data
}

// Login user
const login = async (userData) => {
  const response = await phantomApi.post('users/login', userData)
  if (response.data) {
    if(response.data.adminToken){
      localStorage.setItem('jwt', response.data.adminToken)
    }else if (response.data.operatorToken) {
      localStorage.setItem('jwt', response.data.operatorToken);
    } else {
      localStorage.setItem('jwt', response.data.driverToken);
    }
  }

  return response.data
}

// Logout user
const logout = () => {
  localStorage.removeItem('user');
}

const authService = {
  logout,
  login,
  register,

}

export default authService 
