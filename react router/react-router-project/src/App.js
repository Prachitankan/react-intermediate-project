import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar"
import Home from "./pages/Home";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Dashbord from "./pages/Dashbord"
import PrivateRoute from "./components/PrivateRoute";

const App = () => {

  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <div className="w-screen min-h-screen bg-[#000013] flex flex-col font-inter">
    <Navbar isLoggedIn = {isLoggedIn} setIsLoggedIn = {setIsLoggedIn}/>

    <Routes>

      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login setIsLoggedIn = {setIsLoggedIn}/>}/>
      <Route path="/signup" element={<Signup setIsLoggedIn={setIsLoggedIn}/>}/>
      <Route path="/dashboard" element={
        <PrivateRoute isLoggedIn = {isLoggedIn}>
          <Dashbord/>
        </PrivateRoute>
        }/>

    </Routes>
    </div>
  );
};

export default App;
