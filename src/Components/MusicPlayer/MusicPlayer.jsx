import React, { useState, useRef, useEffect } from "react";
import "./MusicPlayer.css";

import { AiFillPlayCircle, AiFillPauseCircle } from "react-icons/ai";
import { IconContext } from "react-icons";

const MusicPlayer = ({
    currentSong
}) => {
    const [isPlaying, setIsPlaying] = useState(false);
    // We need to create a "Reference" to the audio element
    // so React has a "pointer" to the dom element it needs to update
    // when pausing or playing
    // https://react.dev/reference/react#ref-hooks
    const audioRef = useRef();

    const playingButton = () => {
        if (isPlaying) {
            audioRef.current.pause();
            setIsPlaying(false);
        } else {
            audioRef.current.play();
            setIsPlaying(true);
        }
    };

    // This is a fix to make sure the pause button changes back
    // to a play button when the song data changes
    // https://react.dev/reference/react/useEffect
    useEffect(() => {
        setIsPlaying(false);
    }, [currentSong])

    return (
        <>
            {/* This is called "conditional rendering" */}
            {/* We only show the music player if song data is available */}
            {currentSong.title && (
                <div className="musicPlayer">
                    <div className="albumImage">
                        <img src={currentSong.image} alt={currentSong.title} />
                    </div>
                    <div className="textWrap">
                        <h1>
                            {currentSong.title}
                        </h1>
                        <p>
                            {currentSong.artist}
                        </p>
                    </div>
                    {!isPlaying ? (
                        <button className="playButton" onClick={playingButton}>
                            {/* I'm using an icon package here */}
                            {/* But an SVG could be used just as easily */}
                            <IconContext.Provider value={{ size: "3em", color: "#27AE60" }}>
                                <AiFillPlayCircle />
                            </IconContext.Provider>
                        </button>
                    ) : (
                        <button className="playButton" onClick={playingButton}>
                            <IconContext.Provider value={{ size: "3em", color: "#27AE60" }}>
                                <AiFillPauseCircle />
                            </IconContext.Provider>
                        </button>
                    )}
                    <audio
                        ref={audioRef}
                        src={currentSong.mp3}
                    />
                </div>
            )}
        </>
    )
}

export default MusicPlayer;