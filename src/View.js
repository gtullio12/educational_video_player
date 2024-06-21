import React from "react";
import TopNavBar from "./Navbar";
import ViewVideo from "./ViewVideo";
import { useLocation } from "react-router-dom";

const View = () => {
  const location = useLocation();
  const videoId = location.pathname.split('/')[2];
  return (
    <div>
      <TopNavBar />
      <ViewVideo videoId={videoId}/>
    </div>
  );
};

export default View;
