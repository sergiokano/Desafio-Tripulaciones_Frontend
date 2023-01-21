import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./components/Home/Home";
import Login from "./components/Login/Login";
import Register from "./components/Register/Register";
import TestMap from "./components/TestMap/TestMap";

function App() {
    return (
        <div className="App">
            <BrowserRouter>
                <main>
                    <Routes>
                        <Route path="/" element={<Home />}></Route>
                        <Route path="/testmap" element={<TestMap />}></Route>
                        <Route path="/loginUser" element={<Login />} />
                        <Route path="/createUser" element={<Register />} />
                        <Route path="/register" element={<Register />} />
                    </Routes>
                </main>
            </BrowserRouter>
        </div>
    );
}

export default App;
