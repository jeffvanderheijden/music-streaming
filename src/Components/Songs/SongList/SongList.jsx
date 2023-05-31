import React from "react";
import "./SongList.css";
import SongItem from "./../SongItem/SongItem";
import songData from "./../songData";

const SongList = ({
  setCurrentSong
}) => {
  return (
    <div className="songList">
      {songData.map(song => (
        <SongItem 
          song={song} 
          setCurrentSong={setCurrentSong} 
          key={song.title}
        />  
      ))}
    </div>
  )
}

export default SongList;