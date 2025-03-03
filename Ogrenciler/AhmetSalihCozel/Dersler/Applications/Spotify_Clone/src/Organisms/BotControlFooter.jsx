import * as React from "react";
import PlayBar from "../Molecules/PlayBar";
import PlayButtons from "../Molecules/PlayButtons";
import CurrentPlaying from "../Molecules/CurrentPlaying";
import { Grid } from "@mui/material";

function BotControlFooter() {

  useEffect(() => {
    const waitForSpotify = () => {
      if (window.Spotify != null) {
        window.onSpotifyWebPlaybackSDKReady();
      } else {
        console.log("Spotify SDK yüklenmedi, tekrar dene...");
        setTimeout(waitForSpotify, 500);
      }
    };

    waitForSpotify();
  }, []);

  return (
    <Grid container rowSpacing={0} columnSpacing={{ xs: 1, sm: 2, md: 3 }} sx={{ height: "120px", bgcolor: "black", color: "primary.main" }}>
      <Grid item xs={4} >
        <CurrentPlaying />
      </Grid>
      <Grid item xs={4} sx={{ display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", gap: 1 }}>
      <PlayButtons  />
      <PlayBar />
      </Grid>
      <Grid item xs={4} >
      </Grid>
    </Grid>
  );
}

export default BotControlFooter;

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

window.onSpotifyWebPlaybackSDKReady = () => {
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

  player.addListener("not_ready", ({ device_id }) => {
    console.log("Device ID has gone offline", device_id);
  });

  player.addListener("initialization_error", ({ message }) => {
    console.error(message);
  });

  player.addListener("authentication_error", ({ message }) => {
    console.error(message);
  });

  player.addListener("account_error", ({ message }) => {
    console.error(message);
  });

  player.addListener('player_state_changed', ({
    position,
    duration,
    track_window: { current_track }
  }) => {
    console.log('Currently Playing', current_track);
    console.log('Position in Song', position);
    console.log('Duration of Song', duration);
  });

  player.connect().then((success) => {
    if (success) {
      console.log("The Web Playback SDK successfully connected to Spotify!");
      let counter = 0;
      playerEventOnClick("toggleButton", ()=>{if (counter % 2 == 0){
        counter++
        return player.togglePlay()
      } else {
        counter++
        return player.pause()
      }} , ()=>{});

      playerEventOnClick("skipPreviousButton", ()=>{player.previousTrack()} , ()=>{});
      playerEventOnClick("skipNextButton", ()=>{player.nextTrack()} , ()=>{});
    }
  });

  function playerEventOnClick(htmlElId, event, callBackFunc) {

    let button = document.getElementById(htmlElId)
    button.addEventListener("click",() => {
      callBackFunc();
      try {
        event();
        console.log(`${htmlElId} başarılı`);
      } catch (error) {
        console.error(`${htmlElId} hatalı`, error);
      }
    });

  }
};
