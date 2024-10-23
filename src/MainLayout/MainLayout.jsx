import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from '../Pages/Navbar';

const MainLayout = () => {
    return (
        <div className='text-white'>
            <Navbar></Navbar>

            <Outlet></Outlet>
        </div>
    );
};

export default MainLayout;