import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import AddPostIssue from "./components/AddPostIssue/AddPostIssue";
import Home from "./components/Home/Home";
import HomeMap from "./components/HomeMap/HomeMap";
import Login from "./components/Login/Login";
import PostDetail from "./components/Post/PostDetail/PostDetail";
import Profile from "./components/Profile/Profile";
import Register from "./components/Register/Register";
import RegisterSuccesful from "./components/Register/RegisterSuccesful";
import PrivateZone from "./guards/PrivateZone";
 

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/home-map" element={<HomeMap />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route
              path="/profile"
              element={
                <PrivateZone>
                  <Profile />
                </PrivateZone>
              }
            />

            <Route
              path="/report-issue"
              element={
                <PrivateZone>
                  <AddPostIssue />
                </PrivateZone>
              }
            />
            <Route
              path="/registerOK"
              element={
                  <RegisterSuccesful />
              }
            />
            <Route
              path="/post/:_id"
              element={
                <PrivateZone>
                  <PostDetail />
                </PrivateZone>
              }
            />
          </Routes>
        </main>
      </BrowserRouter>
    </div>
  );
}

export default App;
