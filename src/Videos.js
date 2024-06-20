import { Video } from "./Video";
import Row from 'react-bootstrap/Row';

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

const Videos = () => {
  const videoCards = TEMPORARY_DATA.videos.map((v) => {
    return <Video title={v.title} user={v.user} comments={v.comments} />;
  });
  return <div>
    <Row xs={1} md={2} className="g-4">
        {videoCards}
    </Row>
  </div>;
};

export default Videos;
