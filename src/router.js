import React from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import Login from './components/login';
import Home from './components/home';
import Profile  from './components/profile';
import Header from './components/header';
const RouterIndex = () => {

    const AuthRoute = ({ children}) => {
        let isLoggedIn =  localStorage.getItem('user') && JSON.parse(localStorage.getItem('user')) ? true: false;
        return !isLoggedIn ? <Navigate to='/login'/> : <><Header/>{children}</>;
    }

    const BasicRoute = ({children}) => {
        let isLoggedIn =  localStorage.getItem('user') && JSON.parse(localStorage.getItem('user')) ? true: false;
        return !isLoggedIn ? children :<Navigate to='/'/>;
    }

    return <Router>
        <Routes>
            <Route path="/"  element={<AuthRoute><Home/></AuthRoute>}/>
            <Route path="/login"  element={<BasicRoute><Login/></BasicRoute>}/>
            <Route path="/profile"  element={<AuthRoute ><Profile/></AuthRoute>}/>
        </Routes>

    </Router>
}

export default RouterIndex;