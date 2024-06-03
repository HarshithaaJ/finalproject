import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import styles from  './registerpage.module.css'
import { registerUser } from '../../apis/auth';

const Signup = () => {
        
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        password: '',
        confirmPassword: ''
    });

    const [message, setMessage] = useState('');
    const navigate = useNavigate();

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (formData.password !== formData.confirmPassword) {
            setMessage('Passwords do not match');
            return;
        }

        const response =  await registerUser (formData.email, formData.name,formData.password,formData.confirmPassword)
         if(response){
            console.log(response);
         }else{
            console.log(Error);
         }
    //     try {
    //         const response = await axios.post('http://localhost:3000/api/v1/auth/register', formData);
    //         setMessage(response.data.message);
    //         navigate('/');
    //     } catch (error) {
    //         setMessage('Error: ' + error.response.data.message);
    //     }
     };

    return (
        <div>
          <div className={styles.container}>
            <form onSubmit={handleSubmit} >
            
                <div>
                    <label>Name:</label>
                    <input  className={styles.input} type="text" name="name" value={formData.name} onChange={handleChange} required />
                </div>
                <div>
                    <label>Email:</label>
                    <input className={styles.input} type="email" name="email" value={formData.email} onChange={handleChange} required />
                </div>
                <div>
                    <label>Password:</label>
                    <input className={styles.input} type="password" name="password" value={formData.password} onChange={handleChange} required />
                </div>
                <div>
                    <label>Confirm Password:</label>
                    <input className={styles.input} type="password" name="confirmPassword" value={formData.confirmPassword} onChange={handleChange} required />
                </div>
                <button className={styles.button} type="submit">Signup</button>
            </form>
          </div>
            {message && <p>{message}</p>}
          </div>
        
        
    );
};

export default Signup;