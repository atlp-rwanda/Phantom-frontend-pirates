import React, {useEffect} from 'react'
import { useNavigate } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'

import { NavHeader } from '../components'

function Notifications() {
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
              <h1>Notifications</h1>
              </div>
        </div>
    </> 
  )
}

export default Notifications