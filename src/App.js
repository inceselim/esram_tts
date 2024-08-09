import logo from './logo.svg';
import './App.css';
import { useSpeech } from "react-text-to-speech";
import { useState } from 'react';

function App() {
  const [text, setText] = useState("Seni çok seviyorum aşkım başarılar dilerim hep mutlu olasın")
  const [highlightText, setHighlightText] = useState(true);
  const {
    Text, // Component that returns the modified text property
    speechStatus, // String that stores current speech status
    isInQueue, // Boolean that stores whether a speech utterance is either being spoken or present in queue
    start, // Function to start the speech or put it in queue
    pause, // Function to pause the speech
    stop, // Function to stop the speech or remove it from queue
  } = useSpeech({
    text: text, highlightText,
    highlightProps: { style: { color: "white", backgroundColor: "blue" } },
  });
  return (
    <div className="App">
      <header className="App-header">
        <div style={{ display: "flex", flexDirection: "column", rowGap: "1rem" }}>
          <Text />
          <div style={{ display: "flex", columnGap: "0.5rem" }}>
            {speechStatus !== "started" ? <button onClick={start}>Start</button> : <button onClick={pause}>Pause</button>}
            <button onClick={stop}>Stop</button>
          </div>
        </div>
        <img src={logo} className="App-logo" alt="logo" />
      </header>
    </div>
  );
}

export default App;
