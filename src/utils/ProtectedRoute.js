import React, { useEffect, useState } from 'react';
import { Navigate } from 'react-router-dom';
import axios from 'axios';

const ProtectedRoute = ({ children, requiredRole }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios.get(`${process.env.REACT_APP_API_BASE_URL}/api/auth/me`,{withCredentials:true})
      .then(res => {
        setUser(res.data);
        setLoading(false);
      })
      .catch(() => {
        setUser(null);
        setLoading(false);
      });
  }, []);

  if (loading) return <p>Loading...</p>;
  if (!user || (requiredRole && user.role !== requiredRole)) {
    alert('only content creators can create blog,login as content creator');
    return <Navigate to="/login" />;
  }

  return children;
};

export default ProtectedRoute;
