import MediaPlayer from "./MediaPlayer.js";
import AutoPlay from "./plugins/AutoPlay.js";
import AutoPause from "./plugins/AutoPause.js";

const video = document.querySelector("video");
const player = new MediaPlayer({ 
  element: video,
  plugins: [
    new AutoPlay(),
    new AutoPause(),
  ],
});


const playButton = document.querySelector("#playButton");
playButton.onclick = () => player.tooglePlay();

const muteButton = document.querySelector("#muteButton");
muteButton.onclick = () => player.toogleMute();


if('serviceWorker' in navigator) {
  navigator.serviceWorker.register('/sw.js').catch(error => {
    console.log(error.message);
  })
}