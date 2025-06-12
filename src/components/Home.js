import React,{useState} from 'react';
import axios from 'axios';
import { Outlet,Link } from 'react-router-dom';
import './styles/Home.css'

export default function Home(){
    return(
        <>
            <nav>
                {/* <a href="/" class='button'>Home</a> */}
                <Link to="/" class='button'>Home</Link>
                <a href="/login" class='button'>Login/Signup</a>
                <a href="/contact-us" class='button'>Contact Us</a>
                <Link to='/admin-dashboard' class='button'>Admin Dashboard</Link>
            </nav>
            <Outlet/>
        </>
        
    );
}