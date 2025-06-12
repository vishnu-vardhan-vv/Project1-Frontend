import React from 'react';
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import RegisterForm from './components/RegisterForm';
import LoginForm from './components/LoginForm';
import ForgotPassword from './components/ForgotPassword';
import ResetPassword from './components/ResetPassword';
import Home from './components/Home';
import ContactUs from './components/ContactUs';
import AdminDashboard from './components/AdminDashboard';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home/>}>
          <Route path='/admin-dashboard' element={<AdminDashboard/>}/>
          <Route path='/register' element={<RegisterForm/>} />
          <Route path='/login' element={<LoginForm/>} />
          <Route path='/forgot-password' element={<ForgotPassword/>} />
          <Route path='/reset-password/:token' element={<ResetPassword/>} />
          <Route path='/contact-us' element={<ContactUs/>} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;

