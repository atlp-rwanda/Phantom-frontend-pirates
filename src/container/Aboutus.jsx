import React from 'react'
import { withTranslation } from 'react-i18next';

import { NavHeader } from '../components'

function Aboutus({t}) {
   
  return (
    <> 
        <div className="flex items-center min-h-screen">
            <div
                className="h-full absolute">
                <NavHeader />
            </div>
            <div className="flex-1 h-full text-center max-w-6xl mx-auto rounded-lg">
            <h1>About Us</h1>
              </div>
        </div>
    </> 
  )
}

export default withTranslation()(Aboutus);