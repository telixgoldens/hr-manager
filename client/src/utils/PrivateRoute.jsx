import React, { useContext } from 'react'
import AuthContext from '../context/AuthContext'
import { Navigate } from 'react-router-dom'

const PrivateRoute = () => {
    const {user, isLoading} = useContext(AuthContext)
    if (isLoading){
        return <div>Loading..</div>
    }
  return user ? children : <Navigate to="/auth/signin"/>
    
  
}

export default PrivateRoute