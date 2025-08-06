"use client";
import React, { useRef, useEffect, useState } from "react";

function VideoSection() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isInView, setIsInView] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);
  const [isBuffering, setIsBuffering] = useState(false);
  const [isMuted, setIsMuted] = useState(true);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        // Calculate how much of the video is visible
        const intersectionRatio = entry.intersectionRatio;
        const isVisible = intersectionRatio > 0.5;
        console.log("Video visibility:", intersectionRatio, "isVisible:", isVisible);
        setIsInView(isVisible);
      },
      {
        threshold: [0, 0.25, 0.5, 0.75, 1.0], // Simplified thresholds
        rootMargin: "0px", // No margin for precise control
      }
    );

    if (videoRef.current) {
      observer.observe(videoRef.current);
      console.log("Observer attached to video");
    }

    return () => {
      if (videoRef.current) {
        observer.unobserve(videoRef.current);
      }
    };
  }, []);

  // Control video playback based on visibility
  useEffect(() => {
    console.log("Playback control - isInView:", isInView, "isLoaded:", isLoaded, "isBuffering:", isBuffering);
    
    if (videoRef.current) {
      if (isInView) {
        console.log("Attempting to play video");
        videoRef.current.play().catch((error) => {
          console.log("Autoplay prevented:", error);
        });
      } else {
        console.log("Pausing video");
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

  const handleVideoClick = () => {
    if (videoRef.current) {
      const newMutedState = !isMuted;
      videoRef.current.muted = newMutedState;
      setIsMuted(newMutedState);
    }
  };

  return (
    <div className="max-w-[1440px] w-full mx-auto px-4 laptop:px-8">
      <div 
        className="w-full aspect-video rounded-2xl overflow-hidden relative cursor-pointer"
        onClick={handleVideoClick}
      >
        {isBuffering && (
          <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 z-10">
            <div className="text-white text-lg">Loading...</div>
          </div>
        )}
        {/* Mute/Unmute indicator */}
        <div className="absolute top-4 right-4 z-20 bg-black bg-opacity-50 rounded-full p-2">
          {isMuted ? (
            <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
              <path d="M16.5 12c0-1.77-1.02-3.29-2.5-4.03v2.21l2.45 2.45c.03-.2.05-.41.05-.63zm2.5 0c0 .94-.2 1.82-.54 2.64l1.51 1.51C20.63 14.91 21 13.5 21 12c0-4.28-2.99-7.86-7-8.77v2.06c2.89.86 5 3.54 5 6.71zM4.27 3L3 4.27 7.73 9H3v6h4l5 5v-6.73l4.25 4.25c-.67.52-1.42.93-2.25 1.18v2.06c1.38-.31 2.63-.95 3.69-1.81L19.73 21 21 19.73l-9-9L4.27 3zM12 4L9.91 6.09 12 8.18V4z"/>
            </svg>
          ) : (
            <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
              <path d="M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-1.02-3.29-2.5-4.03v8.05c1.48-.73 2.5-2.25 2.5-4.02zM14 3.23v2.06c2.89.86 5 3.54 5 6.71s-2.11 5.85-5 6.71v2.06c4.01-.91 7-4.49 7-8.77s-2.99-7.86-7-8.77z"/>
            </svg>
          )}
        </div>
        <video
          ref={videoRef}
          className="w-full h-full object-cover"
          muted={isMuted}
          loop
          playsInline
          preload="auto"
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