import React from 'react';
import Counter from "../components/counter";
const LandingPage = () => {
  return (
    <div>
        <h1 className="text-3xl font-bold underline">
            Hello Phantom, This is our Landing Page
        </h1>
        <div className='box-decoration-slice bg-gradient-to-r from-indigo-600 to-pink-500 text-white px-2'>
        <Counter />
        </div>
    </div>
)}

export default LandingPage