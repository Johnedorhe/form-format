import React from 'react';
import { useNavigate } from 'react-router-dom';
import { signOut } from 'firebase/auth';
import { auth } from '../firebase';

const Dashboard = () => {
  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      await signOut(auth);
      navigate('/');
    } catch (error) {
      alert('Logout failed: ' + error.message);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <h1 className="text-3xl font-bold mb-6">Dashboard</h1>
      <button
        onClick={handleLogout}
        className="px-6 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600 font-semibold"
      >
        Logout
      </button>
    </div>
  );
};

export default Dashboard;
