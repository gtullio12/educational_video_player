import { useEffect, useState } from "react";
import Video from "./Video";
import { api } from "./api";

const RecommendVideos = () => {
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    api
      .get(process.env.REACT_APP_GET_VIDEOS_API_URL)
      .then((response) => response.json())
      .then((response) => setVideos(response.videos));
  });


  const videosFromApi = videos.map((v) => {
    return (
      <Video
        title={v.title}
        user={v.user_id}
        comments={v.num_comments}
        description={v.description}
        video_url={v.video_url}
        id={v.id}
      />
    );
  });

  return <div>{videosFromApi}</div>;
};

export default RecommendVideos;
