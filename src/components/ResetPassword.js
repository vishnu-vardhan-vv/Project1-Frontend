import React, { useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import './styles/ResetPassword.css'

export default function ResetPassword(){
    const { token } = useParams();
    const [password, setPassword] = useState('');
    const [message, setMessage] = useState('');

    const handleChange=(event)=>{
        const value=event.target.value;
        setPassword(value);
    }

    const handleSubmit=async (event)=>{
        event.preventDefault();
        try{
            console.log('Good to go');
            // const res=await axios.post(`/api/auth/reset-password/${token}`,{password});
            const res=await axios.post(`${process.env.REACT_APP_API_BASE_URL}/api/auth/reset-password/${token}`,{password});
            console.log('Password reset completed successfully');
            setMessage(res.data);
        }
        catch(error){
            console.log('error');
            // setMessage('Error occured due to something');
            setMessage(error.response?.data || 'Error');
        }
    }

    return(
        <form onSubmit={handleSubmit}>
            <h2>Reset Password</h2>
            <input type='password' placeholder='New Password' onChange={handleChange} required/>
            <button type='submit'>Reset</button>
            <p>{message}</p>
        </form>
    );
}
