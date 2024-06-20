import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./home";
import View from "./View";

export class App extends React.Component {
    render () {
        return (
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/video/:videoid" element={<View/>} />
            </Routes>
        )
    }
}