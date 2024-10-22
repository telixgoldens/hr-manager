import React, { useContext } from 'react'
import AuthContext from '../context/AuthContext'
import { Navigate, useLocation, useNavigate } from 'react-router-dom';

const RoleBasedRoute = ({children, requiredRole}) => {
    const {user, isLoading} = useContext(AuthContext);
    const location = useLocation();
    const navigate = useNavigate()

    if (isLoading){
        return <div>Loading...</div>
    }
    if (!requiredRole.includes(user.role)){
        const previousLocation = location.state?.from || '/auth/signin';
        navigate(previousLocation);
        return;
    }

  return user ? children : <Navigate to= "/auth/signin"/>
}

export default RoleBasedRoute