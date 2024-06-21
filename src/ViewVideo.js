import React from "react";
import Video from "./Video";
import Comments from "./Comments";
import RecommendVideos from "./RecommendVideos";

const ViewVideo = () => {
    return (
        <div>
            <div>
                <Video />
                <Comments />
            </div>
            <div>
                <RecommendVideos />
            </div>
        </div>
    );
}

export default ViewVideo;