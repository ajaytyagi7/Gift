import React, { useEffect } from 'react'
import{Nevigate} from 'react-router-dom'
import useUserContext from '../UserContext'

const Logout = () => {
    const { Logout } = useUserContext();
    useEffect(() => {
        Logout();

    }, [Logout])

  return (
    <Nevigate to='/Home' />
  )
}

export default Logout