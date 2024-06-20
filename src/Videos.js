import { Video } from "./Video";
import { useEffect, useState } from "react";
import Row from "react-bootstrap/Row";
import React from "react";

const TEMPORARY_DATA = {
  videos: [
    {
      title: "Example_video_1",
      user: "garret_tullio",
      comments: 2,
    },
    {
      title: "Example_video_2",
      user: "garret_tullio",
      comments: 2,
    },
    {
      title: "Example_video_3",
      user: "garret_tullio",
      comments: 2,
    },
    {
      title: "Example_video_4",
      user: "garret_tullio",
      comments: 2,
    },
    {
      title: "Example_video_5",
      user: "garret_tullio",
      comments: 2,
    },
    {
      title: "Example_video_6",
      user: "garret_tullio",
      comments: 2,
    },
    {
      title: "Example_video_7",
      user: "garret_tullio",
      comments: 2,
    },
    {
      title: "Example_video_8",
      user: "garret_tullio",
      comments: 2,
    },
    {
      title: "Example_video_9",
      user: "garret_tullio",
      comments: 2,
    },
  ],
};

const GET_API_URL =
  "https://take-home-assessment-423502.uc.r.appspot.com/api/videos?user_id=garret_tullio";

function Videos() {
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    fetch(GET_API_URL, {
      method: "GET",
      headers: {
        "Content-type": "application/json",
        accept: "application/json",
      },
    })
      .then((response) => response.json())
      .then((response) => {
        setVideos(response.videos);
      });
  });

  const videosFromApi = videos.map((v) => {
    return <Video title={v.title} user={v.user_id} comments={v.num_comments} description={v.description} video_url={v.video_url} id={v.id} />
  })
  const temporaryData = TEMPORARY_DATA.videos.map((v) => {
    return <Video title={v.title} user={v.user} comments={v.comments} />;
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
