import MediaThemeTailwindAudio from "player.style/tailwind-audio/react";
import { useState } from "react";

const App = () => {
  // Initialise la qualité audio par défaut à "128" (la partie variable de l'URL)
  const [quality, setQuality] = useState("128");

  // Les parties fixes des URLs sont désormais construites directement dans le src
  const baseUrl = "https://ic2527.c972.fastserv.com:80/spoonradio_mp3_";

  return (
    // Utilisation de styles inline pour le conteneur principal
    <div style={{
      width:'100vw',
      minHeight: '100vh',
      backgroundColor: '#f3f4f6', // bg-gray-100
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      padding: '1rem'
    }}>
      {/* Conteneur pour les boutons de sélection de qualité */}
      <div style={{
        display: 'flex',
        gap: '1rem', // space-x-4
        marginBottom: '2rem' // mb-8
      }}>
        {/* Bouton pour la qualité 128kbps */}
        <button
          onClick={() => setQuality("128")} // Passe la chaîne "128" à l'état
          style={{
            padding: '0.75rem 1.5rem', // px-6 py-3
            backgroundColor: '#3b82f6', // bg-blue-500
            color: 'white',
            fontWeight: '600', // font-semibold
            borderRadius: '0.5rem', // rounded-lg
            boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)', // shadow-md
            border: 'none',
            cursor: 'pointer',
            transition: 'background-color 0.3s ease-in-out', // transition duration-300 ease-in-out
          }}
          onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#2563eb'} // hover:bg-blue-600
          onMouseLeave={(e) => e.currentTarget.style.backgroundColor = '#3b82f6'}
        >
          128 kbps
        </button>
        {/* Bouton pour la qualité 192kbps */}
        <button
          onClick={() => setQuality("192")} // Passe la chaîne "192" à l'état
          style={{
            padding: '0.75rem 1.5rem', // px-6 py-3
            backgroundColor: '#22c55e', // bg-green-500
            color: 'white',
            fontWeight: '600', // font-semibold
            borderRadius: '0.5rem', // rounded-lg
            boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)', // shadow-md
            border: 'none',
            cursor: 'pointer',
            transition: 'background-color 0.3s ease-in-out', // transition duration-300 ease-in-out
          }}
          onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#16a34a'} // hover:bg-green-600
          onMouseLeave={(e) => e.currentTarget.style.backgroundColor = '#22c55e'}
        >
          192 kbps
        </button>
      </div>

      {/* Composant du lecteur audio */}
      <MediaThemeTailwindAudio
        style={{
          width: "100%",
          maxWidth: "600px",
          "--media-primary-color": "#d12323",
          borderRadius: '0.75rem', // rounded-xl
          boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)', // shadow-lg
          padding: '1rem', // p-4
          backgroundColor: 'white' // bg-white
        }}
      >
        <audio
          slot="media"
          src={`${baseUrl}${quality}`} // Construit l'URL complète avec le template literal
          playsInline
          crossOrigin="anonymous"
        ></audio>
      </MediaThemeTailwindAudio>

      {/* Message d'information sur la qualité actuelle */}
      <p style={{
        marginTop: '1.5rem', // mt-6
        color: '#4b5563', // text-gray-700
        fontSize: '1.125rem', // text-lg
      }}>
        Qualité actuelle : <span style={{ fontWeight: 'bold' }}>{quality} kbps</span>
      </p>
    </div>
  );
};

export default App;
