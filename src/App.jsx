import React from 'react'
import Login from './pages/login'
import Signup from './pages/signup'
import Homepage from './pages/homepage'
import Dashboard from './pages/dashboard'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

const App = () => {
  const router = createBrowserRouter([
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

  return (
    <div>
      <RouterProvider router={router} />
    </div>
  )
}

export default App
