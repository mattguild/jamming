import React from "react";
import "./playlist.css";

function Playlist() {
  return (
    <div className="Playlist">
      <input defaultValue="New Playlist" />
      {/* <TrackList /> */}
      <button className="Playlist-save">SAVE TO SPOTIFY</button>
    </div>
  );
}

export default Playlist;
