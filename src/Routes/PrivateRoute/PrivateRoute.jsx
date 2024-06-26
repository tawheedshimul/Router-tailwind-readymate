import React, { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { AuthContext } from '../../providers/AuthProvider';

const PrivateRoute = ({ children }) => {
    const { user, loading } = useContext(AuthContext);
    const location = useLocation();

    if (loading) {
        return <>
            <div className="fixed inset-0 flex items-center justify-center bg-gray-100 z-50">
                <div className="animate-spin rounded-full h-32 w-32 border-t-2 border-b-2 border-blue-500"></div>
            </div></>
    }
    if (user) {
        return children
    }
    return <Navigate state={location.pathname} to='/login' />
};

export default PrivateRoute;