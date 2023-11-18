import "./App.css";
import Navbar from "./components/Navbar";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Dashboard from "./pages/Dashboard";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import { useState } from "react";
import PrivateRoute from "./pages/PrivateRoute";

function App() {
  const [isLoggedIn, setLoggedIn] = useState(false);
  return (
    <div className=" bg-richblack-900 w-screen min-h-screen flex flex-col">
      <Navbar isLoggedIn={isLoggedIn} setLoggedIn={setLoggedIn}></Navbar>
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>

        <Route
          path="/dashboard"
          element={
            <PrivateRoute isLoggedIn={isLoggedIn}>
              <Dashboard></Dashboard>
            </PrivateRoute>
          }
        ></Route>

        <Route
          path="/login"
          element={
            <Login isLoggedIn={isLoggedIn} setLoggedIn={setLoggedIn}></Login>
          }
        ></Route>
        <Route
          path="/signup"
          element={
            <Signup isLoggedIn={isLoggedIn} setLoggedIn={setLoggedIn}></Signup>
          }
        ></Route>
      </Routes>
    </div>
  );
}

export default App;
