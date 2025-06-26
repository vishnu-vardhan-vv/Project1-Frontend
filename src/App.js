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
import BlogDetails from './pages/BlogDetails';
import BlogHome from './pages/BlogHome';
import CreateBlog from './pages/CreateBlog';
import ProtectedRoute from './utils/ProtectedRoute';


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
          <Route path='/blog' element={<BlogHome/>} />
          <Route path='/blog/:id' element={<BlogDetails/>} />
          {/* <Route path='/blog/create' element={<CreateBlog/>} /> */}
          <Route  path="blog/create"
            element={
              <ProtectedRoute requiredRole="Content Creator">
                <CreateBlog />
              </ProtectedRoute>
            }
          />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;




// import React from 'react';
// import { BrowserRouter, Routes, Route } from 'react-router-dom';
// import HomePage from './pages/HomePage';
// import BlogDetails from './pages/BlogDetails';
// import CreateBlog from './pages/CreateBlog';

// function App() {
//   return (
//     <BrowserRouter>
//       <Routes>
//         <Route path="/" element={<HomePage />} />
//         <Route path="/blog/:id" element={<BlogDetails />} />
//         <Route path="/create" element={<CreateBlog />} />
//       </Routes>
//     </BrowserRouter>
//   );
// }

// export default App;


