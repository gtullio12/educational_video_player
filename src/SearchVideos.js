import { useEffect, useState } from "react";
import { api } from "./api";
import { TopNavBar } from "./Navbar";
import Video from "./Video";
import { Row } from "react-bootstrap";

/**
 * Shows list of videos based off of users search.
 * Will search based off of title of video.
 */
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
    // return true if the search is a substring of the original video title
    return v.title.includes(searchVideo);
  });

  const videoComponents = matchingVideos.map((v) => {
    return (
      <Video
        date={v.created_at}
        title={v.title}
        user={v.user_id}
        comments={v.num_comments}
        description={v.description}
        video_url={v.video_url}
        id={v.id}
      />
    );
  });

  return (
    <div>
      <TopNavBar />
      <div className="home-page-videos">
        <Row md={3} className="videos">
          {videoComponents}
        </Row>
      </div>
    </div>
  );
};

export default SearchVideos;
