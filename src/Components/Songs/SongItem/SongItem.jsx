import React from "react";
import "./SongItem.css";

const SongItem = ({
  song,
  setCurrentSong
}) => {
  return (
    <div 
      className="songItem" 
      onClick={() => { setCurrentSong(song) }}
    >
      <div className="albumImage">
        <img src={song.image} />
      </div>
      <div className="textWrap">
        <h1>
          {song.title}
        </h1>
        <p>
          {song.artist}
        </p>
      </div>
    </div>
  )
}

export default SongItem;