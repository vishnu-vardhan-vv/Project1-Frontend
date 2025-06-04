import React,{useState} from 'react';
import axios from 'axios';
import './Home.css'

export default function Home(){
    return(
        <nav>
            <a href="/register" class='button'>Register</a>
            <br/>
            <a href="/login" class='button'>Login</a>
            <br/>
            <a href="/forgot-password" class='button'>Forgot Password</a>
        </nav>
    );
}

