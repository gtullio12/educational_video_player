import React from "react";
import TopNavBar from "./Navbar";
import ViewVideo from "./ViewVideo";
import { useLocation } from "react-router";

/**
 * Parent component for viewing videos. Will have a navbar, current video playing, and a list of recommended videos
 */
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
