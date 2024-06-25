import { useEffect, useState } from "react";
import { api } from "./api";
import { TopNavBar } from "./Navbar";
import Video from "./Video";
import { Row } from "react-bootstrap";

const SearchVideos = () => {
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    api
      .get(process.env.REACT_APP_GET_VIDEOS_API_URL)
      .then((response) => response.json())
      .then((response) => setVideos(response.videos));
  }, []);

  const searchVideo = window.location.pathname.split("/")[2];

  // Filter videos based off of search
  const matchingVideos = videos.filter((v) => {
    return v.title.includes(searchVideo);
  });

  const videoComponents = matchingVideos.map((v) => {
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

  console.log(matchingVideos);

  return (
    <div>
      <TopNavBar />
      <Row xs={1} md={2} className="g-4">
        {videoComponents}
      </Row>
    </div>
  );
};

export default SearchVideos;
