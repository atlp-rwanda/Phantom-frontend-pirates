import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

export const notifyInfo = (message) => toast.info(`${message}`, {
    position: "top-right",
    autoClose: 3000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    theme: "dark"
});

export const notifySuccess = (message) => toast.success(`${message}`, {
    position: "top-right",
    autoClose: 3000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    theme: "dark"
});

export const redirect = () => {
    
const navigate = useNavigate();
    const resolveAfter3Sec = new Promise(resolve => setTimeout(resolve, 3000));
    toast.promise(
        resolveAfter3Sec,
        {
          pending: 'Promise is pending',
          success: {
            render({data}){
              return `Hello ${data}`
            },
          },
          error: 'Promise rejected 🤯'
          
        }
    )
}