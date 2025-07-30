import MediaThemeTailwindAudio from "player.style/tailwind-audio/react";
import { useState } from "react";
const App = () => {
  const [quality, setQuality] = useState();
  const quality192 = "https://ic2527.c972.fastserv.com:80/spoonradio_mp3_192";
  const quality128 = "https://ic2527.c972.fastserv.com:80/spoonradio_mp3_128";
  return (
    <>
      <div style={{ display: "flex" }}>
        <div
          onClick={() => setQuality(quality128)}
          style={{ cursor: "pointer", marginRight: "1rem" }}
        >
          128kbits/s
        </div>
        <div
          onClick={() => setQuality(quality192)}
          style={{ cursor: "pointer", marginRight: "1rem" }}
        >
          192kbits/s
        </div>
      </div>

      <MediaThemeTailwindAudio
        style={{ width: "100vw", "--media-primary-color": "#d12323" }}
      >
        <audio
          slot="media"
          src={quality}
          playsInline
          crossOrigin="anonymous"
        ></audio>
      </MediaThemeTailwindAudio>
    </>
  );
};

export default App;
