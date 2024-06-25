import React from "react";
import TopNavBar from "./Navbar";
import ViewVideo from "./ViewVideo";
import { useLocation } from "react-router";

const View = () => {
  const location = useLocation();
  const currentVideoId = location.pathname.split('/')[2];
  return (
    <div>
      <TopNavBar />
      <ViewVideo
        currentVideoId={currentVideoId}
      />
    </div>
  );
};
export default View;
