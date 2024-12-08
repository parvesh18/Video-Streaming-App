import React from "react";
import ButtonList from "./ButtonList";
import VideoContainer from "./VideoContainer";

const MainContainer = () => {
  return (
    <div className="md:pl-5 w-screen h-screen">
      <ButtonList />
      <VideoContainer />
    </div>
  );
};

export default MainContainer;
