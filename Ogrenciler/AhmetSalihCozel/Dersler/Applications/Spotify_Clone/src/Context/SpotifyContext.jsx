import api from "../api/api";
import { createContext, useState, useContext, useEffect } from "react";

const SpotifyContext = createContext();

export const SpotifyProvider = ({ children }) => {
  const [isPlayerReady, setIsPlayerReady] = useState(false);
  const [player, setPlayer] = useState(null);
  const [playlistArr, setPlaylistArr] = useState([]);
  const [userInfo, setUserInfo] = useState(null);
  const [playClick, setPlayClick] = useState(false);
  const [previousClick, setPreviousClick] = useState(false)
  const [nextClick, setNextClick] = useState(false)

  const tracknull = {
    name: "",
    album: {
      images: [
        { url: "" }
      ]
    },
    artists: [
      { name: "" }
    ]
  }
  const token = import.meta.env.VITE_SPOTIFY_TOKEN;

  async  function fetchPlayLists(params) {
    let playlists = [];
    api(token, "https://api.spotify.com/v1/me/playlists", "GET")
      // resp.items.forEach(

      //   (item) => {
      //     fetch(`https://api.spotify.com/v1/playlists/${item.id}`, {
      //       method: "GET",
      //       headers: {
      //         "Authorization": `Bearer ${token}`,
      //         "Content-Type": "application/json"
      //       }
      //     })
      //     .then((resp) => {
      //       // console.log(resp)
      //        return resp.json()
      //        })
      //     .then((playlistObject) => {
      //       // setPlaylistArr(playlistArr.push(playlistObject))
      //       // console.log(playlistObject)
      //       })
      //       // return playlists
      //   }
      // )

  }


  const [track, setTrack] = useState(tracknull);

  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://sdk.scdn.co/spotify-player.js";
    script.async = true;
    document.body.appendChild(script);

    window.onSpotifyWebPlaybackSDKReady = async () => {
      const newPlayer = await new Spotify.Player({
        name: "Web Playback SDK Player",
        getOAuthToken: (cb) => cb(token),
        volume: 0.5,
      });

      await getUserObject(token, setUserInfo);

      newPlayer.addListener("ready", async ({ device_id }) => {
        console.log("Ready with Device ID", device_id);
        await setDeviceForPlayback(device_id);
      });

      newPlayer.addListener("not_ready", ({ device_id }) => {
        console.log("Device has gone offline", device_id);
      });

      newPlayer.addListener("player_state_changed", ({
        position,
        duration,
        track_window: { current_track },
      }) => {
        setTrack(current_track);
        // console.log("Currently Playing", current_track);
        // console.log("Position in Song", position);
        // console.log("Duration of Song", duration);
      });

      const success = await newPlayer.connect();
      if (success) {
        console.log("The Web Playback SDK successfully connected to Spotify!");
        setIsPlayerReady(true);
        setPlayer(newPlayer);
      }

    };
  }, []);





  const values = {
    track, setTrack,
    player, isPlayerReady, fetchPlayLists,
  };


  return (
    <SpotifyContext.Provider value={values}>{children}</SpotifyContext.Provider>
  );
};
export const useSpotify = () => useContext(SpotifyContext);


async function getUserObject(token, setUserInfo) {
  const userObject = await fetch("https://api.spotify.com/v1/me", {
    method: "GET",
    headers: {
      "Authorization": `Bearer ${token}`,
      "Content-Type": "application/json"
    }
  });

  const userData = await userObject.json();
}


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