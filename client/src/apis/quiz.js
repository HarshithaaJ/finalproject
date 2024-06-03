import axios from "axios";
// const backendUrl = process.env.REACT_APP_BACKEND_URL;

 export const CreateQuiz = async(title, questions,category, createdBy) =>{
    try {
       
        const reqUrl = `http://localhost:7000/api/v1/quiz/add`;
        const response =  await axios.post(reqUrl,{title, questions,category, createdBy: req.userId });
        return response.data;
    } catch (error) {
        console.log(error);
        
    }
}
export const getQuiz = async() =>{
    try {
      
        const reqUrl = `http://localhost:7000/api/v1/quiz/:id`;
        const response =  await axios.get(reqUrl);
        return response.data;
    } catch (error) {
        console.log(error);
        
    }
}
export const submitQuiz = async() =>{
    try {
        debugger;
        const reqUrl = `http://localhost:7000/api/v1/quiz/:id/submit`;
        const response =  await axios.post(reqUrl);
        return response.data;
    } catch (error) {
        console.log(error);
        
    }
}
export const getAllQuizzes = async() =>{
    try {
        
        const reqUrl = `http://localhost:7000/api/v1/quiz/all`;
        const response =  await axios.get(reqUrl);
        return response.data;
    } catch (error) {
        console.log(error);
        
    }
}
export const getTrendingQuizzes = async() =>{
    try {
        
        const reqUrl = `http://localhost:7000/api/v1/quiz/all/trending`;
        const response =  await axios.get(reqUrl);
        return response.data;
    } catch (error) {
        console.log(error);
        
    }
}
export const getQuizAnalytics = async() =>{
    try {
       
        const reqUrl = `http://localhost:7000/api/v1/quiz/:id/analytics`;
        const response =  await axios.get(reqUrl);
        return response.data;
    } catch (error) {
        console.log(error);
        
    }
}