import { createContext, useState,useContext } from "react";

const SpotifyContext = createContext();

export const SpotifyProvider = ({ children }) => {
    const [track, setTrack] = useState(null);
    const [playClick, setPlayClick] = useState(false);
    const [previousClick, setPreviousClick] = useState(false)
    const [nextClick, setNextClick] = useState(false)



    const token = import.meta.env.VITE_SPOTIFY_TOKEN;
    const player = new Spotify.Player({
      name: "Web Playback SDK Quick Start Player",
      getOAuthToken: (cb) => {
        cb(token);
      },
      volume: 0.5,
    });

    player.addListener("ready", ({ device_id }) => {
        console.log("Ready with Device ID", device_id);
        setDeviceForPlayback(device_id);
    });

    player.connect().then((success) => {
        if (success) {
          console.log("The Web Playback SDK successfully connected to Spotify!");
        }
      });

    player.addListener('player_state_changed', ({
    position,
    duration,
    track_window: { current_track }
    }) => {
    setTrack(track)
    console.log('Currently Playing', current_track);
    console.log('Position in Song', position);
    console.log('Duration of Song', duration);
    });        

    const values = {
        track, setTrack,
        playClick, setPlayClick,
        previousClick, setPreviousClick,
        nextClick, setNextClick,
    };
    return (
        <SpotifyContext.Provider value={values}>{children}</SpotifyContext.Provider>
    );
};
export const useSpotify = () => useContext(SpotifyContext);





async function setDeviceForPlayback(deviceId) {
  const token = import.meta.env.VITE_SPOTIFY_TOKEN;

  const response = await fetch('https://api.spotify.com/v1/me/player', {
    method: 'PUT',
    headers: {
      'Authorization': `Bearer ${token}`,
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      device_ids: [deviceId]
    })
  });

  if (!response.ok) {
    console.error('Error setting device for playback:', response.statusText);
  } else {
    console.log('Successfully set device for playback');
  }
}