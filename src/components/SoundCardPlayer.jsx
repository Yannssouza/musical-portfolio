import React from "react";
import ReactPlayer from "react-player";

const SoundCloudPlayer = ({ link }) => {
  return (
    <div className="max-w-screen-md mx-auto my-8">
      <ReactPlayer url={link} width="100%" height="100%" />
    </div>
  );
};

export default SoundCloudPlayer;
