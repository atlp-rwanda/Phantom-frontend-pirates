<<<<<<< HEAD
import Cookies from 'universal-cookie'
import phantomApi from '../../api/api'

const cookies = new Cookies();

// Login user
const login = async (userData) => {
  const response = await phantomApi.post('users/login', userData)
  if (response.data) {
    cookies.set('jwt', JSON.stringify(response.data.operatorToken))
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
=======
import phantomApi from '../../api/api'



// Register user
const register = async (userData) => {
    const { firstname, lastname, email } = userData;
    const response = await phantomApi.post("employees/3",{firstname,lastname,email})
   /*  if(response.data) {
        localStorage.setItem('user', JSON.stringify(response.data))
    } */

    return response.data
}

const authService = {
    register
}

export default authService
>>>>>>> 154c6efff39ce338054c596f2b4721a92e9fd80c
