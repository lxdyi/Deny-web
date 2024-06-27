import React, { useState, useRef, useEffect } from "react";
import { IoMdPause, IoIosPlay } from "react-icons/io";
import { BiSkipNext, BiSkipPrevious } from "react-icons/bi";
import { PiRepeatThin, PiRepeatOnceThin } from "react-icons/pi";

const VideoPlayer = ({
  showVideo,
  setShowVideo,
  surahData,
  currentVideoIndex,
  setCurrentVideoIndex,
}) => {
  const videoBaseUrl = "https://deen.somee.com/files/";
  const [playing, setPlaying] = useState(false);
  const [loop, setLoop] = useState(false);
  const videoRef = useRef(null);
  const [played, setPlayed] = useState(0);
  const [seeking, setSeeking] = useState(false);
  const [playbackRate, setPlaybackRate] = useState(1.0); // State for playback rate

  useEffect(() => {
    setPlaying(true); // Start playing when a new video is loaded
    if (videoRef.current) {
      videoRef.current.play();
    }
  }, [showVideo]);

  const togglePlay = () => {
    setPlaying(!playing);
    if (videoRef.current) {
      if (!playing) {
        videoRef.current.play();
      } else {
        videoRef.current.pause();
      }
    }
  };

  const nextVideo = () => {
    if (currentVideoIndex < surahData.length - 1) {
      const newIndex = currentVideoIndex + 1;
      setCurrentVideoIndex(newIndex);
      setShowVideo(surahData[newIndex].file);
      setPlaying(true);
    }
  };

  const prevVideo = () => {
    if (currentVideoIndex > 0) {
      const newIndex = currentVideoIndex - 1;
      setCurrentVideoIndex(newIndex);
      setShowVideo(surahData[newIndex].file);
      setPlaying(true);
    }
  };

  const toggleRepeat = () => {
    setLoop(!loop);
  };

  const handleProgress = () => {
    if (videoRef.current) {
      const currentPlayed = videoRef.current.duration
        ? videoRef.current.currentTime / videoRef.current.duration
        : 0;
      if (!seeking) {
        setPlayed(currentPlayed);
      }
    }
  };

  const handleSeek = (e) => {
    if (videoRef.current) {
      const seekTime = e.target.value * videoRef.current.duration;
      setPlayed(parseFloat(e.target.value));
      videoRef.current.currentTime = seekTime;
    }
  };

  const handleSeekMouseDown = () => {
    setSeeking(true);
  };

  const handleSeekMouseUp = (e) => {
    handleSeek(e);
    setSeeking(false);
  };

  const toggleSpeed = () => {
    const newRate = playbackRate === 1.0 ? 2.0 : 1.0; // Toggle between 1x and 2x
    setPlaybackRate(newRate);
    if (videoRef.current) {
      videoRef.current.playbackRate = newRate;
    }
  };

  return (
    <div className="w-full max-w-5xl mx-auto mt-8 flex justify-center">
      {showVideo && (
        <div className="flex flex-col items-center justify-center">
          <div className="w-full max-w-[700px] ">
            <div className=" bg-white w-[350px] lg:w-[500px] xl:w-[700px] h-[600px]  shadow-xl">
              <video
                ref={videoRef}
                src={`${videoBaseUrl}${showVideo}`}
                className="w-full h-full"
                loop={loop}
                onTimeUpdate={handleProgress}
                onEnded={nextVideo}
              />
            </div>
            <input
              type="range"
              min={0}
              max={1}
              step="any"
              value={isNaN(played) ? 0 : played}
              onMouseDown={handleSeekMouseDown}
              onChange={handleSeek}
              onMouseUp={handleSeekMouseUp}
              className="slider  w-[350px] lg:w-[500px] xl:w-[700px] appearance-none bg-transparent h-[10px] rounded-full outline-none"
              style={{
                background: `linear-gradient(to right, #03AA77 0%, #03AA77 ${
                  played * 100
                }%, #03AA7733 ${played * 100}%, #03AA7733 100%)`,
              }}
            />
          </div>
          {/* Custom controls */}
          <div className="w-full max-w-[700px] mt-4">
            <div className="flex justify-center">
              <button onClick={toggleSpeed} className="mr-10 mt-4">
                <span className="font-bold">
                  {playbackRate === 1.0 ? "1x" : "2x"}
                </span>
              </button>
              <button onClick={prevVideo} disabled={currentVideoIndex === 0}>
                <BiSkipPrevious size={40} />
              </button>
              <button
                onClick={togglePlay}
                className="w-[60px] h-[60px] mx-2 rounded-full bg-[#03AA77] flex items-center justify-center"
              >
                {playing ? (
                  <IoMdPause size={30} color="white" />
                ) : (
                  <IoIosPlay size={30} color="white" />
                )}
              </button>
              <button
                onClick={nextVideo}
                disabled={currentVideoIndex === surahData.length - 1}
              >
                <BiSkipNext size={40} />
              </button>
              <button onClick={toggleRepeat} className="ml-10">
                {loop ? (
                  <PiRepeatOnceThin size={30} title="Disable Repeat" />
                ) : (
                  <PiRepeatThin size={30} title="Enable Repeat" />
                )}
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default VideoPlayer;

