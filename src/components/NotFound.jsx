import React from 'react';
import { Link } from 'react-router-dom'
import { withTranslation } from 'react-i18next';

const NotFound = ({t}) => {
  return (
    <div className='relative bg-white '>
            <div className="max-w-7xl mx-auto">
                <div className="flex flex-row items-center justify-center relative">
                    <div
                        className="flex flex-col items-center justify-center md:py-24 lg:py-32">
                        <h1 className="font-bold text-blue-600 text-9xl">404</h1>
                        <p
                            className="mb-2 text-2xl font-bold text-center text-gray-800 md:text-3xl"
                        >
                            <span className="text-red-500">Uh oh!</span>{t('notFound.span')}
                        </p>
                        <p className="mb-8 text-center text-gray-500 md:text-lg">
                            {t('notFound.p')}
                        </p>
                        <Link to='/'>
                            <a
                                className="px-6 py-2 text-sm font-semibold text-blue-800 bg-blue-100"
                            >{t('notFound.link')}</a
                            >
                        </Link>
                    </div>
                </div>
            </div>
        </div>
  )
}

export default withTranslation()(NotFound);