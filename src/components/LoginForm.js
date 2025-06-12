import React,{useState} from 'react';
import axios from 'axios';
import './styles/LoginForm.css'

export default function LoginForm(){
    const [form,setForm]=useState({email:'',password:''});
    const [message,setMessage]=useState('');

    const handleChange=(event)=>{
        const name=event.target.name;
        const value=event.target.value;
        setForm((prev)=>({...prev,[name]:value}));
    }

    const handleSubmit=async (event)=>{
        event.preventDefault();
        try{
            console.log('Good to go');
            // const res=await axios.post('/api/auth/login',form,{withCredentials: true});
            const res=await axios.post(`${process.env.REACT_APP_API_BASE_URL}/api/auth/login`,form,{withCredentials: true})
            
            console.log('Loginned successfully');
            setMessage(res.data);
        }
        catch(error){
            console.log('error');
            // setMessage('Error occured due to something');
            setMessage(error.response?.data || 'Error');
        }
    }
    return (
        <form onSubmit={handleSubmit}>
            <h2>Login</h2>
            <input type='email' name='email' placeholder='Email' onChange={handleChange} required/>
            <input type='password' name='password' placeholder='Password' onChange={handleChange} required/>
            <button type='submit'>Login</button>
            <br/>
            <br/>
            <pre>
                <a href="/forgot-password">Forgot Password?</a>                    <a href="/register">Register</a>
            </pre>
            
            <p>{message}</p>
        </form>
    );
}



