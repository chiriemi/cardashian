import React from "react";
import { Routes, Route } from "react-router-dom";
import { Layout } from "./components/Layout/Layout";
import { About } from "./pages/About/About";
import { Home } from "./pages/Home/Home";
import { Login } from "./pages/Login/Login";
import { Schedule } from "./pages/Schedule/Schedule";
// import { Movie } from "./pages/Movie/Movie"
// import { Movies } from "./pages/Movies/Movies"
import { Register } from "./pages/Register/Register";
import { Shop } from "./pages/Shop/Shop";
import { Cars } from "./pages/Shop/components/Cars/Cars/Cars";
import { Parts } from "./pages/Shop/components/Parts/Parts";
import { EachCar } from "./pages/Shop/components/Cars/Car/EachCar";
export const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/schedule" element={<Schedule />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/shop/cars" element={<Cars />} />
        <Route path="/shop/cars/:uuid" element={<EachCar />} />
        <Route path="/shop/parts" element={<Parts />} />
      </Route>
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
    </Routes>
  );
};
