import phantomApi from '../../api/api';

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
}

export default authService 