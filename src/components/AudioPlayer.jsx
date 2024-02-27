import { useEffect, useState } from "react";
import themeSong from "../audio/pokemon-music.mp3";

export function AudioPlayer() {
  function usePlayer(themeSong) {
    const [audio] = useState(new Audio(themeSong));
    const [playing, setPlaying] = useState(false);

    const toggle = () => setPlaying(!playing);

    useEffect(() => {
      if (playing) {
        audio.volume = 0.05;
        audio.play();
      } else {
        audio.pause();
      }
    }, [playing, audio]);

    useEffect(() => {
      audio.addEventListener("ended", () => setPlaying(false));
      return () => {
        audio.removeEventListener("ended", () => setPlaying(false));
      };
    }, [audio]);

    return [playing, toggle];
  }

  const [playing, toggle] = usePlayer(themeSong);


// **`useState`** hook is used to create two state variables:
// **`audio`**: Initialized with a new **`Audio`** object constructed with the **`themeSong`** variable. This represents the audio element to be played.
// **`playing`**: Initialized with a boolean value **`false`**, indicating whether the audio is currently playing or not.
// **`toggle`**: This function toggles the value of **`playing`** state, effectively controlling whether the audio should be played or paused.
// **`useEffect`** hook is used to manage the playing and pausing of the audio based on changes to the **`playing`** state.
// When **`playing`** state changes, if it becomes **`true`**, the effect adjusts the volume of the **`audio`** element and plays it. If it becomes **`false`**, the effect pauses the audio.
// Another **`useEffect`** hook is used to handle the end of audio playback.
// It adds an event listener to the **`audio`** element for the 'ended' event. When the audio playback ends, it sets the **`playing`** state to **`false`**.
// The cleanup function returned by this effect removes the event listener when the component unmounts, ensuring no memory leaks.
// - The custom hook returns an array containing **`playing`** state and the **`toggle`** function.
// This allows components using the hook to access the current playing state and the function to toggle it.


  return (
    <div className="audio-player">
      <button className="play-button" onClick={toggle}>
        {playing ? "Pause" : "Play"}
      </button>
      <span className="audio-notif">{playing ? "♪ Audio Playing  ♪" : ""}</span>
      <br />
    </div>
  );
}



// **`const [playing, toggle] = useAudio(themeSong);` :** This line of code is using the **`useAudio`** hook (which is likely a custom hook) to manage the audio playback. It returns an array with two elements:
// **`playing`**: A boolean variable indicating whether the audio is currently playing.
// **`toggle`**: A function used to toggle between playing and pausing the audio.
// The component renders a **`<div>`** element with the class name **`"audio-player"`**. Inside this **`<div>`**, there is:
// A **`<button>`** element with the class name **`"play-button"`**.
// The **`onClick`** event handler is set to the **`toggle`** function, meaning when the button is clicked, it will toggle the playback state of the audio.
// The text content of the button is dynamic based on the **`playing`** variable. If **`playing`** is true, the button text will be "Pause", indicating that clicking the button will pause the audio. If **`playing`** is false, the button text will be "Play", indicating that clicking the button will start playing the audio.
// A **`<span>`** element with the class name **`"audio-notif"`**.
// This element displays a notification message indicating whether the audio is currently playing. If **`playing`** is true, it displays "♪ audio playing ♪". Otherwise, it displays an empty string.