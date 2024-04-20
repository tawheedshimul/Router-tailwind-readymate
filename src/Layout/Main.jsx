import React from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import Navbar from '../Pages/Navbar/Navbar';
import Footer from '../Pages/Footer/Footer';

const Main = () => {

    const location = useLocation();
  console.log(location);
  const noHeaderFooter = location.pathname.includes("login") || location.pathname.includes("registration")
    return (
        <div>
            <div className='mb-'>
            {noHeaderFooter || <Navbar/>}
            </div>
            <div className='h-[]'>
            <Outlet></Outlet>
            </div>
            {noHeaderFooter || <Footer/>}
        </div>
    );
};

export default Main;