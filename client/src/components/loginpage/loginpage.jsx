
import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import  styles from './loginpage.module.css';
 import  { loginUser } from '../../apis/auth'


const Login = () => {
    const [formData, setFormData] = useState({
        email: '',
        password: ''
    });

    const [message, setMessage] = useState('');
    const navigate = useNavigate();

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();


        const response =  await loginUser (formData.email,formData.password)
        if(response){
           console.log(response);
        }else{
           console.log(Error);
        }
        // try {
        //     const response = await axios.post('http://localhost:7000/api/v1/auth/login', formData);
        //     setMessage(response.data.message);
        //     if(response?.data?.token){
        //         localStorage.setItem("token", response.data.token);
        //         navigate("/view/*");
        //     }
        // } catch (error) {
        //     setMessage('Error: ' + (error.response?.data?.message || 'Login failed'));
        // }
    };

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>Email:</label>
                    <input className={styles.input} type="email" name="email" value={formData.email} onChange={handleChange} required />
                </div>
                <div>
                    <label>Password:</label>
                    <input className={styles.input} type="password" name="password" value={formData.password} onChange={handleChange} required />
                </div>
                <button className={styles.button} type="submit">Login</button>
            </form>
            {message && <p>{message}</p>}
        </div>
    );
};

export default Login;

