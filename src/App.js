import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Home from "./components/Home/Home";
import TestMap from "./components/TestMap/TestMap";
import Login from "./components/Login/Login";
import Register from "./components/Register/Register";

function App() {
    return (
        <div className="App">
            <BrowserRouter>
                <Header />
                <main>
                    <Routes>
                        <Route path="/" element={<Home />}></Route>
                        <Route path="/testmap" element={<TestMap />}></Route>
                        <Route path="/loginUser" element={<Login />} />
                        <Route path="/createUser" element={<Register />} />
                    </Routes>
                </main>
                <Footer />
            </BrowserRouter>
        </div>
    );
}

export default App;
