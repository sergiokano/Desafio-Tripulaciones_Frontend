import React from "react";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import "./App.css";
import AddPostIssue from "./components/AddPostIssue/AddPostIssue";
import Home from "./components/Home/Home";
import HomeMap from "./components/HomeMap/HomeMap";
import Login from "./components/Login/Login";
import PostDetail from "./components/Post/PostDetail/PostDetail";
import Profile from "./components/Profile/Profile";
import Register from "./components/Register/Register";
import RegisterSuccesful from "./components/Register/RegisterSuccesful";
import AuthZone from "./guards/AuthZone";
import PrivateZone from "./guards/PrivateZone";

function App() {
    return (
        <div className="App">
            <BrowserRouter>
                <main>
                    <Routes>
                        <Route element={<AuthZone />}>
                            <Route path="/" element={<Home />} exact />
                            <Route path="/login" element={<Login />} />
                            <Route path="/register" element={<Register />} />
                            <Route
                                path="/registerOk"
                                element={<RegisterSuccesful />}
                            />
                        </Route>
                        <Route element={<PrivateZone />}>
                            <Route path="/home-map" element={<HomeMap />} />
                            <Route path="/profile" element={<Profile />} />
                            <Route path="/post/:_id" element={<PostDetail />} />
                            <Route
                                path="/report-issue"
                                element={<AddPostIssue />}
                            />
                        </Route>
                        <Route path="*" element={<Navigate to="/" />} />
                    </Routes>
                </main>
            </BrowserRouter>
        </div>
    );
}

export default App;
