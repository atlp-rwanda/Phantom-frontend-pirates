import phantomApi from "../../api/api";


// Register user
const register = async (userData) => {
  const { firstname, lastname, email } = userData;
  const response = await phantomApi.post("employees/3", {
    firstname,
    lastname,
    email,
  });
  /*  if(response.data) {
        localStorage.setItem('user', JSON.stringify(response.data))
    } */

  return response.data;
};

// Login user
const login = async (userData) => {
  const response = await phantomApi.post("users/login", userData);
  if (response.data) {
    localStorage.setItem("user", JSON.stringify({user: response.data.user}))
    if(response.data.adminToken){
      localStorage.setItem("jwt", response.data.adminToken)
    }else if (response.data.operatorToken) {
      localStorage.setItem("jwt", response.data.operatorToken);
    } else {
      localStorage.setItem("jwt", response.data.driverToken);
    }
  }
  return response.data;
};

// Logout user
const logout = () => {
  localStorage.removeItem("user");
  localStorage.removeItem("jwt");
}

const authService = {
  logout,
  login,
  register,
}

export default authService 
