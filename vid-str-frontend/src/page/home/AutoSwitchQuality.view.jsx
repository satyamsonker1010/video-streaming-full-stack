import React, { useEffect, useRef } from "react";
import Hls from "hls.js";

function AutoSwitchQuality() {
  const videoRef = useRef();

  useEffect(() => {
    const video = videoRef.current;
    const hls = new Hls();

    hls.loadSource("http://localhost:3000/video/hls-file-send");
    hls.attachMedia(video);

    hls.on(Hls.Events.MANIFEST_PARSED, function () {
      video.play();
    });

    return () => {
      hls.destroy();
    };
  }, []);

  return (
    <div
      style={{
        width: "100vw",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
      }}
    >
      <h1>React Adaptive Video Streaming (HLS)</h1>
      <video ref={videoRef} controls width="640" height="360" />
    </div>
  );
}

export default AutoSwitchQuality;
