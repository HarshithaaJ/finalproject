import axios from "axios";
// const backendUrl = process.env.REACT_APP_BACKEND_URL;

 export const loginUser = async(email,password) =>{
    try {
        debugger;
        const reqUrl = `http://localhost:7000/api/v1/auth/login`;
        const response =  await axios.post(reqUrl,{email ,password});
        return response.data;
    } catch (error) {
        console.log(error);
        
    }
}
export const registerUser = async({email,password,name}) =>{
    try {
       
        const reqUrl = `http://localhost:7000/api/v1/auth/register`;
        const response =  await axios.post(reqUrl,{email ,password,name});
        return response.data;
    } catch (error) {
        console.log(error);
        
    }
}