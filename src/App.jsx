import { useState } from "react";
import './player.css'
function App() {
  return (
    <div className="player">
      <audio
        className="player__buttons"
        controls
        src="https://ic2527.c972.fastserv.com:80/spoonradio_mp3_192"
      >
        Votre navigateur ne supporte pas l'élément audio.
      </audio>
    </div>
  );
}

export default App;
