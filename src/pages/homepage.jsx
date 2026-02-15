import React from 'react'
import { Link } from 'react-router-dom'
import Login from './login'
import Signup from './signup'

const Homepage = () => {
  return (
    <div>
      <h1 className='text-center text-8xl mb-5'>HOMEPAGE</h1>
      <div className='text-center space-x-8 font-semibold'>
        <Link to="/login"> Login </Link>
        <Link to="/signup"> Sign Up </Link>
      </div>
      <p>Dummy text</p>
      <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dignissimos itaque amet, cum saepe assumenda molestias expedita cupiditate! Quos in aspernatur, placeat assumenda expedita aliquid obcaecati nulla, maiores dolor molestias sapiente.</p>
      <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dignissimos itaque amet, cum saepe assumenda molestias expedita cupiditate! Quos in aspernatur, placeat assumenda expedita aliquid obcaecati nulla, maiores dolor molestias sapiente.</p>
      <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dignissimos itaque amet, cum saepe assumenda molestias expedita cupiditate! Quos in aspernatur, placeat assumenda expedita aliquid obcaecati nulla, maiores dolor molestias sapiente.</p>
      <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dignissimos itaque amet, cum saepe assumenda molestias expedita cupiditate! Quos in aspernatur, placeat assumenda expedita aliquid obcaecati nulla, maiores dolor molestias sapiente.</p>
      <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dignissimos itaque amet, cum saepe assumenda molestias expedita cupiditate! Quos in aspernatur, placeat assumenda expedita aliquid obcaecati nulla, maiores dolor molestias sapiente.</p>
    </div>
  )
}

export default Homepage
