import React from 'react'
import Login from './pages/login'
import Signup from './pages/signup'
import Homepage from './pages/homepage'
import Dashboard from './pages/dashboard'
import { createHashRouter, RouterProvider } from 'react-router-dom'

const router = createHashRouter([
  {
    index: true,
    element: <Homepage />
  },
  {
    path: '/login',
    element: <Login />
  },
  {
    path: '/signup',
    element: <Signup />
  },
  {
    path: '/dashboard',
    element: <Dashboard />
  }
])

const App = () => {
  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center">
      <div className="w-full max-w-4xl p-6 bg-white shadow-md rounded-lg">
        <RouterProvider router={router} />
      </div>
    </div>
  )
}

export default App