import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import AddPostIssue from "./components/AddPostIssue/AddPostIssue";
import Home from "./components/Home/Home";
import HomeMap from "./components/HomeMap/HomeMap";
import Login from "./components/Login/Login";
import Register from "./components/Register/Register";
import RegisterSuccesful from "./components/Register/RegisterSuccesful";

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
                            path="/report-issue"
                            element={<AddPostIssue />}
                        />
                        <Route
                            path="/registerSuccess"
                            element={<RegisterSuccesful />}
                        />
                    </Routes>
                </main>
            </BrowserRouter>
        </div>
    );
}

export default App;
