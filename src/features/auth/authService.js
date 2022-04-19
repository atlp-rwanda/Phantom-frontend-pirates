import axios from 'axios'
import Cookies from 'universal-cookie'
import phantomApi from '../../api/api'

const cookies = new Cookies();

// Login user
const login = async (userData) => {
  const response = await phantomApi.post('users/login', userData)
  if (response.data) {
    cookies.set('user', JSON.stringify(response.data))
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
