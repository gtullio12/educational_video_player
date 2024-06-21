import { useEffect, useState } from "react";
import Row from "react-bootstrap/Row";
import React from "react";
import Video from "./Video";
import { api } from "./api";

const TEMPORARY_DATA = {
  videos: [
    {
      title: "Example_video_1",
      user: "garret_tullio",
      comments: 2,
      id: "dlkhj9454"
    },
    {
      title: "Example_video_2",
      user: "garret_tullio",
      comments: 2,
      id: "dlkhj9454"
    },
    {
      title: "Example_video_3",
      user: "garret_tullio",
      comments: 2,
      id: "dlkhj9454"
    },
    {
      title: "Example_video_4",
      user: "garret_tullio",
      comments: 2,
      id: "dlkhj9454"
    },
    {
      title: "Example_video_5",
      user: "garret_tullio",
      comments: 2,
      id: "dlkhj9454"
    },
    {
      title: "Example_video_6",
      user: "garret_tullio",
      comments: 2,
      id: "dlkhj9454"
    },
    {
      title: "Example_video_7",
      user: "garret_tullio",
      comments: 2,
      id: "dlkhj9454"
    },
    {
      title: "Example_video_8",
      user: "garret_tullio",
      comments: 2,
      id: "dlkhj9454"
    },
    {
      title: "Example_video_9",
      user: "garret_tullio",
      comments: 2,
      id: "dlkhj9454"
    },
  ],
};

const Videos = () => {
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    api.get(process.env.REACT_APP_GET_VIDEOS_API_URL)
      .then(response => response.json())
      .then(response => setVideos(response.videos));
  });

  const videosFromApi = videos.map((v) => {
    return <Video title={v.title} user={v.user_id} comments={v.num_comments} description={v.description} video_url={v.video_url} id={v.id} />
  })
  const temporaryData = TEMPORARY_DATA.videos.map((v) => {
    return <Video title={v.title} user={v.user} comments={v.comments} id={v.id} />;
  });
  return (
    <div>
      <Row xs={1} md={2} className="g-4">
        {temporaryData.concat(videosFromApi)}
      </Row>
    </div>
  );
}

export default Videos;
