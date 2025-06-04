import React,{useState} from 'react';
import axios from 'axios';
import './ForgotPassword.css'

export default function ForgotPassword(){
    const [email,setEmail]=useState('');
    const [message,setMessage]=useState('');

    const handleChange=(event)=>{
        const value=event.target.value;
        setEmail(value);
    }

    const handleSubmit=async (event)=>{
        event.preventDefault();
        try{
            console.log('Good to go');
            // const res=await axios.post('/api/auth/forgot-password',{email});
            const res=await axios.post(`${process.env.REACT_APP_API_BASE_URL}/api/auth/forgot-password`,{email});
            setMessage(res.data);
            console.log('sent reset link');
        }
        catch(error){
            console.log('error');
            // setMessage('Error occured due to something');
            setMessage(error.response?.data || 'Error');
        }
    }
    return (
        <form onSubmit={handleSubmit}>
            <h2>Forgot Password</h2>
            <input type='email' name='email' placeholder='Email' onChange={handleChange} required/>
            <button type='submit'>Send Reset Link</button>
            <p>{message}</p>
        </form>
    );
}

