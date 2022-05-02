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
