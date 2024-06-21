import React from "react";
import TopNavBar from "./Navbar";
import ViewVideo from "./ViewVideo";

export class View extends React.Component {
  render() {
    return (
      <div>
        <TopNavBar />
        <ViewVideo />
      </div>
    );
  }
}

export default View;
