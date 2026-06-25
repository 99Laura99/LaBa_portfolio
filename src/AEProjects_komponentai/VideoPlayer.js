import React, { useEffect, useRef } from "react";

function VideoPlayer({src, className}) {
  const videoRef = useRef(null);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if(entry.isIntersecting){
            video.play().catch((err) => console.log("Auto-play blocked:", err));
          } else {
            video.pause();
          } 
        });
      },
      {
        threshold: 1,
      }
    );

    observer.observe(video);

    return () => {
      if (video) observer.unobserve(video);
    };
  }, []);
  
  return (
   <video
    ref={videoRef}
    src={src}
    loop
    muted
    playsInline
    className={className}
   />
  );
}

export default VideoPlayer;