import React from "react";
import Home from "./home";
import View from "./View";
import {  BrowserRouter as Router,  Routes,  Route} from "react-router-dom";

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