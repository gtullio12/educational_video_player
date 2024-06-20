import React from "react";
import TopNavBar from "./Navbar";
import Videos from "./Videos";

class Home extends React.Component {
  render() {
    return (
      <div>
        <div>
          <TopNavBar />
        </div>
        <div>
          <Videos />
        </div>
      </div>
    );
  }
}

export default Home;
