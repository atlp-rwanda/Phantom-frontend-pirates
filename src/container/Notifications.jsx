import React, {useEffect} from 'react'
import { useNavigate } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { withTranslation } from 'react-i18next';

import { NavHeader } from '../components'

function Notifications({t}) {
    const navigate = useNavigate()
  const dispatch = useDispatch()

  const { user } = useSelector((state) => state.auth)

  useEffect(() => {
    
    if (!user) {
      navigate('/login')
    }

  }, [user, navigate, dispatch])
  return (
    <> 
        <div className="flex items-center min-h-screen">
            <div
                className="h-full absolute">
                <NavHeader />
            </div>
            <div className="flex-1 h-full text-center max-w-6xl mx-auto rounded-lg">
            <h1>{t('notifications.notf')}</h1>
              </div>
        </div>
    </> 
  )
}

export default withTranslation()(Notifications);