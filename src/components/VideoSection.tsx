"use client";
import React, { useRef, useEffect, useState } from "react";

function VideoSection() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isInView, setIsInView] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);
  const [isBuffering, setIsBuffering] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsInView(entry.isIntersecting);
      },
      {
        threshold: [0, 0.1, 0.2, 0.3, 0.4, 0.5], // Multiple thresholds for smoother detection
        rootMargin: "0px 0px -25% 0px", // Even larger margin
      }
    );

    if (videoRef.current) {
      observer.observe(videoRef.current);
    }

    return () => {
      if (videoRef.current) {
        observer.unobserve(videoRef.current);
      }
    };
  }, []);

  // Control video playback based on visibility
  useEffect(() => {
    if (videoRef.current && isLoaded && !isBuffering) {
      if (isInView) {
        videoRef.current.play().catch((error) => {
          console.log("Autoplay prevented:", error);
        });
      } else {
        videoRef.current.pause();
      }
    }
  }, [isInView, isLoaded, isBuffering]);

  const handleLoadedData = () => {
    setIsLoaded(true);
    setIsBuffering(false);
  };

  const handleCanPlay = () => {
    setIsLoaded(true);
    setIsBuffering(false);
  };

  const handleWaiting = () => {
    setIsBuffering(true);
  };

  const handleCanPlayThrough = () => {
    setIsBuffering(false);
  };

  return (
    <div className="max-w-[1440px] w-full mx-auto px-4 laptop:px-8">
      <div className="w-full aspect-video rounded-2xl overflow-hidden relative">
        {isBuffering && (
          <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 z-10">
            <div className="text-white text-lg">Loading...</div>
          </div>
        )}
        <video
          ref={videoRef}
          className="w-full h-full object-cover"
          muted
          loop
          playsInline
          preload="auto"
          autoPlay
          controls
          disablePictureInPicture
          disableRemotePlayback
          onLoadedData={handleLoadedData}
          onCanPlay={handleCanPlay}
          onLoadStart={() => console.log("Video loading started")}
          onProgress={() => console.log("Video loading progress")}
          onWaiting={handleWaiting}
          onCanPlayThrough={handleCanPlayThrough}
          style={{
            willChange: "transform",
            transform: "translateZ(0)",
            backfaceVisibility: "hidden",
            perspective: "1000px",
          }}
        >
          <source 
            src="https://astrix.blob.core.windows.net/astrix/1/1/Tribes - Showreel Final.mp4" 
            type="video/mp4" 
          />
          Your browser does not support the video tag.
        </video>
      </div>
    </div>
  );
}

export default VideoSection; 