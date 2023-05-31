import React, { useState } from "react";
import Navigation from "./Components/Navigation/Navigation";
import MusicPlayer from "./Components/MusicPlayer/MusicPlayer";

const Layout = ({
  children
}) => {
  // We save the current song state at the highest parent level
  // So we can pass it to our music player and SongItem components
  const [currentSong, setCurrentSong] = useState({});

  return (
    <main className="layout">
      <Navigation />
      <div className="mainContent">
        {/* To pass the currentSong props to our variable children component */}
        {/* We first need to clone it and add the props manually */}
        {/* Otherwise react won't rerender on changes to the state */}
        {React.cloneElement(
          children, 
          { setCurrentSong: setCurrentSong }
        )}
      </div>
      <MusicPlayer currentSong={currentSong} />
    </main>
  )
}

export default Layout;