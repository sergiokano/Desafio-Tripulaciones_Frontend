import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./components/Home/Home";
import Login from "./components/Login/Login";
import Register from "./components/Register/Register";
import RegisterSuccesful from "./components/Register/RegisterSuccesful";
import TestMap from "./components/TestMap/TestMap";

function App() {
    return (
        <div className="App">
            <BrowserRouter>
                <main>
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/testmap" element={<TestMap />} />
                        <Route path="/login" element={<Login />} />
                        <Route path="/register" element={<Register />} />
                        <Route path="/registerOK" element={<RegisterSuccesful />} />
                    </Routes>
                </main>
            </BrowserRouter>
        </div>
    );
}

export default App;
