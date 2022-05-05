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
       console.log("admin");
    }else if (response.data.operatorToken) {
      cookies.set('jwt', response.data.operatorToken);
      console.log("operator");
    } else {
      cookies.set('jwt', response.data.driverToken);
      console.log("driver");
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