import React, { useState } from 'react'
import Signup from './signup'
import { Link } from 'react-router-dom'
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase";
import { useNavigate } from 'react-router-dom';


const schema = yup.object().shape({
    email: yup.string().email('Invalid email').required('Enter your email'),
    password: yup.string().min(6, 'Minimum of 6 digits required').required('Enter password')
})

const Login = () => {
  const { register, handleSubmit, formState: { errors }, reset } = useForm({
    resolver: yupResolver(schema),
  });
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();

  const onSubmit = async (data) => {
    try {
      await signInWithEmailAndPassword(auth, data.email, data.password);
      navigate("/dashboard"); // redirect after successful login
    } catch (error) {
      alert(error.message);
    } finally {
      reset();
    }
  };

  return (
    <div>
      <h1 className='text-center text-2xl font-semibold'>LOGIN PAGE</h1>

      <section className='flex justify-center p-8 mt-4'>
        <form onSubmit={handleSubmit(onSubmit)} autoComplete="off" className='flex flex-col gap-8 lg:max-w-[700px] p-10 w-full border border-gray-300 rounded-lg shadow-lg'>
          <div className='flex flex-col space-y-1'>
            <label htmlFor="user_email">Email</label>
            <input {...register('email')} type="text" name="email" id="email" autoComplete="new-email" className='border border-gray-200 w-full p-2' placeholder='Enter your email' />
            <p className="text-red-500">{errors.email?.message}</p>
          </div>
          <div className='flex flex-col space-y-1'>
            <label htmlFor="user_password">Password</label>
            <div className='relative'>
              <input
                {...register('password')}
                type={showPassword ? 'text' : 'password'}
                name="password"
                id="password"
                autoComplete="new-password"
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
          <div className='flex flex-col items-center'>
            <p>Don't have an account? <Link to="/signup" className='text-blue-600 hover:underline'>Sign Up</Link></p>
          </div>
          <button className='font-semibold text-lg p-2 bg-gray-300 rounded-lg hover:bg-gray-400 hover:font-bold'>Login</button>
        </form>
      </section>
    </div>
  )
}

export default Login
