import React,{useState} from 'react';
import axios from 'axios';
import './RegisterForm.css'

const roles = ['Buyer', 'Tenant', 'Owner', 'User', 'Admin', 'Content Creator'];

export default function RegisterForm(){
    const [form,setForm]=useState({email:'',password:'',role:''});
    const [feedback,setFeedback]=useState({});
    const [message,setMessage]=useState('');

    const validatePassword=(password)=>{
        const checks={
            length: (password.length>=8),
            upper: (/[A-Z]/.test(password)),
            lower: (/[a-z]/.test(password)),
            special: (/[^A-Za-z0-9]/.test(password))
        }
        setFeedback(checks);
        let val=true;
        for(let key of Object.keys(checks)){
            val=val&checks[key];
        }
        return val;
    }

    const handleChange=(event)=>{
        const name=event.target.name;
        const value=event.target.value;
        setForm((prev)=>({...prev,[name]:value}));
        if(name==='password'){
            validatePassword(value);
        }
    }

    const handleSubmit= async (event)=>{
        event.preventDefault();
        // if(!validatePassword(form.password)) return;
        if(!validatePassword(form.password)) {
            console.log("Invalid password");
            return;
        }
        try{
            console.log('Good to go');
            // const res= await axios.post('/api/auth/register',form);
            const res= await axios.post(`${process.env.REACT_APP_API_BASE_URL}/api/auth/register`,form);
            console.log('Registerd successfully');
            setMessage(res.data);
        } 
        catch (error) {
            console.log(error);
            // setMessage('Error occured due to something');
            setMessage(error.response?.data || 'Error');
        }
    }

    return(
        <form onSubmit={handleSubmit}>
            <h2>Register</h2>
            <input name='email' type="email" placeholder='Email' onChange={handleChange} required />
            <input name='password' type="password" placeholder='Password' onChange={handleChange} required />
            <select name='role' onChange={handleChange} required>
                <option value="">Select Role</option>
                {
                    roles.map((role)=>{
                        return(<option key={role} value={role}>{role}</option>);
                    })
                }
            </select>
            <ul>
                <li style={{ color: feedback.length ? 'green' : 'red' }}>Minimum 8 chararacters</li>
                <li style={{ color: feedback.upper ? 'green' : 'red' }}>At least one uppercase letter</li>
                <li style={{ color: feedback.lower ? 'green' : 'red' }}>At least one lowercase letter</li>
                <li style={{ color: feedback.special ? 'green' : 'red' }}>At least one special character</li>
            </ul>
            <button type='submit'>Register</button>
            <p style={{color: 'black'}}>{message}</p>
        </form>
    );
}
