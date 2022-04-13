import React from 'react';

import Counter from "../components/counter";

import { Testing } from '../components';

const LandingPage = ({ t }) => {

  return (
    <div>
        <h1 className="text-3xl font-bold underline">
            {t('welcome_message')}
        </h1>
        <div className='box-decoration-slice bg-gradient-to-r from-indigo-600 to-pink-500 text-white px-2'>
        <Counter />
        </div>
        <Testing />

    </div>
)}

export default LandingPage;
