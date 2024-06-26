import React from "react";
import TopNavBar from "./Navbar";
import Videos from "./Videos";

/**
 * Home page for website. Has a navbar and list of videos
 */
class Home extends React.Component {
  render() {
    return (
      <div Name="home">
        <TopNavBar />
        <Videos />
      </div>
    );
  }
}

export default Home;
