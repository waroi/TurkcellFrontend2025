import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';

const Admin = () => {
  const [user, setUser] = useState(null);
  const router = useRouter();

  useEffect(() => {
    const userData = localStorage.getItem('user');
    if (!userData) {
      router.push('/login');  
    } else {
      const user = JSON.parse(userData);
      if (user.role !== 'admin') {
        router.push('/profile'); 
      } else {
        setUser(user); 
      }
    }
  }, []);

  if (!user) {
    return <p>Loading...</p>; 
  }

  return (
    <div className="container mt-5">
      <h1>Admin Panel</h1>
      <p>Welcome, {user.name}! You are logged in as an admin.</p>

      <div className="admin-content">
        <h2>Manage Users</h2>
        <button className="btn btn-danger">Delete User</button>
  
      </div>
    </div>
  );
};

export default Admin;
