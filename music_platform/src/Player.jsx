import React, { useState, useRef, useEffect } from 'react';
import './Player.css';

export const Player = () => {
  const audioRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);

  const togglePlay = () => {
    if (isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play();
    }
    setIsPlaying(!isPlaying);
  };

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.onloadedmetadata = () => {
        setDuration(audioRef.current.duration);
      };

      audioRef.current.ontimeupdate = () => {
        setCurrentTime(audioRef.current.currentTime);
      };
    }
  }, []);

  const formatTime = (seconds) => {
    const mins = Math.floor(seconds / 60);
    const secs = Math.floor(seconds % 60);
    return `${mins}:${secs < 10 ? '0' : ''}${secs}`;
  };

  const handleSeek = (e) => {
    const newTime = parseFloat(e.target.value);
    audioRef.current.currentTime = newTime;
    setCurrentTime(newTime);
  };

  return (
    <>
      <div className="container-fluid d-flex flex-column justify-content-end">
        <div className="row">
          <div className="col-12">
            <div className="footer">
              <div className="d-flex flex-row justify-content-center">
                <i className="fa-solid fa-shuffle skip"></i>
                <i className="fa-solid fa-backward skip"></i>

                <button className="play_button" onClick={togglePlay}>
                  <i className={`fa-solid ${isPlaying ? 'fa-pause' : 'fa-play'}`}></i>
                </button>

                <i className="fa-solid fa-forward skip"></i>
                <i className="fa-solid fa-repeat skip"></i>
              </div>

              <div className="progress-container">
                <span className="time current-time">{formatTime(currentTime)}</span>

                <input
                  type="range"
                  className="progress-bar"
                  min="0"
                  max={duration}
                  value={currentTime}
                  onChange={handleSeek}
                  style={{
                    background: `linear-gradient(to right, green ${(currentTime / duration) * 100}%, #ccc 0%)`
                  }}
                />

                <span className="time total-time">{formatTime(duration)}</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <audio ref={audioRef} src="/songs/SpotiDownloader.com - Vardha's One Man Army - Ravi Basrur.mp3" />
    </>
  );
};
