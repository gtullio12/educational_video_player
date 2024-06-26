import React from "react";
import Home from "./home";
import View from "./View";
import { Routes, Route } from "react-router";
import SearchVideos from "./SearchVideos";
import "./index.css";

export class App extends React.Component {
  render() {
    return (
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/video/:videoid" element={<View />} />
        <Route path="/search/:videoname" element={<SearchVideos />} />
      </Routes>
    );
  }
}
