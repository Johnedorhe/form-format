import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup'
import { createUserWithEmailAndPassword } from "firebase/auth"
import { auth } from "../firebase"

const schema = yup.object().shape({
  firstName: yup.string().required('First name is required'),
  lastName: yup.string().required('Last name is required'),
  email: yup.string().email('Invalid email').required('Email is required'),
  password: yup.string().min(6, 'Minimum of 6 digits required').required('Password is required'),
  confirmPassword: yup.string()
    .oneOf([yup.ref('password'), null], 'Passwords must match')
})

const Signup = () => {
  const { register, handleSubmit, formState: { errors }, reset } = useForm({
    resolver: yupResolver(schema),
  })
  const [showPassword, setShowPassword] = useState(false)
  const [showConfirmPassword, setShowConfirmPassword] = useState(false)
  const navigate = useNavigate()

  const onSubmit = async (data) => {
    try {
      await createUserWithEmailAndPassword(auth, data.email, data.password)
      navigate("/login")
 } catch (error) {
      alert(error.message)
    } finally {
      reset()
    }
  }

  return (
    <div>
      <h1 className='text-center text-2xl font-semibold'>SIGN UP PAGE</h1>

      <section className='flex justify-center p-8 mt-4'>
        <form onSubmit={handleSubmit(onSubmit)} autoComplete="off" className='flex flex-col gap-8 lg:max-w-[700px] p-10 w-full border border-gray-300 rounded-lg shadow-lg'>
          
          <div className='flex justify-between gap-4'>
            <div className='flex flex-col space-y-1'>
              <label htmlFor="signup_firstName">First Name</label>
              <input 
                {...register('firstName')} 
                type="text" 
                id='signup_firstName' 
                autoComplete='off' 
                className='border border-gray-200 p-2' 
                placeholder='Enter first name' 
              />
              <p className="text-red-500">{errors.firstName?.message}</p>
            </div>
            <div className='flex flex-col space-y-1'>
              <label htmlFor="signup_lastName">Last Name</label>
              <input 
                {...register('lastName')} 
                type="text" 
                id='signup_lastName' 
                autoComplete='off' 
                className='border border-gray-200 p-2' 
                placeholder='Enter last name' 
              />
              <p className="text-red-500">{errors.lastName?.message}</p>
            </div>
          </div>

          <div className='flex flex-col space-y-1'>
            <label htmlFor="signup_email">Email</label>
            <input 
              {...register('email')} 
              type="text" 
              id='signup_email' 
              autoComplete='email' 
              className='border border-gray-200 w-full p-2' 
              placeholder='Enter your email' 
            />
            <p className="text-red-500">{errors.email?.message}</p>
          </div>

          <div className='flex flex-col space-y-1'>
            <label htmlFor="signup_password">Password</label>
            <div className='relative'>
              <input
                {...register('password')}
                type={showPassword ? 'text' : 'password'}
                id='signup_password'
                autoComplete='new-password'
                className='border border-gray-200 w-full p-2 pr-16'
                placeholder='Enter your password'
              />
              <button 
                type="button" 
                className="absolute right-2 top-1/2 -translate-y-1/2 text-sm" 
                onClick={() => setShowPassword((prev) => !prev)} 
                tabIndex={-1}
              >
                {showPassword ? 'Hide' : 'Show'}
              </button>
            </div>
            <p className="text-red-500">{errors.password?.message}</p>
          </div>

          <div className='flex flex-col space-y-1'>
            <label htmlFor="signup_confirmPassword">Confirm Password</label>
            <div className='relative'>
              <input
                {...register('confirmPassword')}
                type={showConfirmPassword ? 'text' : 'password'}
                id='signup_confirmPassword'
                autoComplete='off'
                className='border border-gray-200 w-full p-2 pr-16'
                placeholder='Confirm your password'
              />
              <button 
                type="button" 
                className="absolute right-2 top-1/2 -translate-y-1/2 text-sm" 
                onClick={() => setShowConfirmPassword((prev) => !prev)} 
                tabIndex={-1}
              >
                {showConfirmPassword ? 'Hide' : 'Show'}
              </button>
            </div>
            <p className="text-red-500">{errors.confirmPassword?.message}</p>
          </div>

          <div>
            <p className="text-center">Already have an account? <Link to="/login" className="text-blue-500 hover:underline">Login</Link></p>
          </div>

          <button className='font-semibold text-lg p-2 bg-gray-300 rounded-lg hover:bg-gray-400 hover:font-bold'>Sign Up</button>
        </form>
      </section>
    </div>
  )
}

export default Signup