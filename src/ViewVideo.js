import RecommendVideos from "./RecommendVideos";
import DisplayVideo from "./DisplayVideo";
import { useEffect } from "react";
import { api } from "./api";

const ViewVideo = ({ videoId }) => {

  return (
    <div style={{ display: "flex", flexDirection: "row" }}>
    <div>
        <DisplayVideo videoId={videoId} />
      </div>
      <div>
        <RecommendVideos />
      </div>
    </div>
  );
};

export default ViewVideo;
