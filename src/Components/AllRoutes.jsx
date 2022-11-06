import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Cart from '../Pages/Cart';
import Home from '../Pages/Home';
import Login from '../Pages/Login';
// all the routing using the routing library should be done from here;

const AllRoutes = () => {
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/login' element={<Login />} />
      <Route path='/cart' element={<Cart />} />
    </Routes>
  );
};

export default AllRoutes;
