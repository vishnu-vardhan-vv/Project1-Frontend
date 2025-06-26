import React,{useState,useEffect} from 'react';
import axios from 'axios';
import { Outlet,Link } from 'react-router-dom';
import './styles/Home.css'

export default function Home(){

    const [user,setUser]=useState(null)
    useEffect(()=>{
        const func=async()=>{
            try{
                const res=await axios.get(`${process.env.REACT_APP_API_BASE_URL}/api/auth/me`,{withCredentials:true});
                if(!res.data){
                    setUser(null);
                    return;
                }
                else{
                    setUser(res.data);
                }
            }
            catch(error){
                console.log(error);
            }    
        }
        func();
    },[]);
    
    return(
        <>
            <nav>
                {/* <a href="/" class='button'>Home</a> */}
                <Link to="/" className='button'>Home</Link>
                <Link to="/blog" className='button'>Blog</Link>
                <a href="/login" className='button'>Login/Signup</a>
                <a href="/contact-us" className='button'>Contact Us</a>
                <Link to='/admin-dashboard' className='button'>Admin Dashboard</Link>
                
            </nav>
            <div>
                {!user ? (
                <h4>No logged in user</h4>
                ) : (
                <div>
                    <h5>Profile</h5>
                    <h5>Email: {user.email}</h5>
                    <h5>Role: {user.role}</h5>
                </div>
                )}
            </div>
            <Outlet/>
            
        </>
        
    );
}