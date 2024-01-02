import React from 'react'
import { redirect,useNavigate } from 'react-router-dom'

function ErrorPage() {
  const navigate = useNavigate();
 function handleToRedirect(){
  return navigate('/login');
 }
  return (
    <h1 className='w-full  flex flex-col justify-center items-center '>
      <h1>Oops...Something went wrong! </h1>
        <button className='text-gray-500 bg-amber-300 rounded-md mt-8 cursor-pointer px-2' onClick={handleToRedirect}>Try Again!</button>
       
    </h1>
  )
}

export default ErrorPage