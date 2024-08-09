import logo from './logo.svg';
import './App.css';
import { useSpeech, useVoices } from "react-text-to-speech";
import { useState } from 'react';

function App() {
  const { languages, voices } = useVoices();
  const [lang, setLang] = useState("");
  const [voiceURI, setVoiceURI] = useState("");

  const [text, setText] = useState(`The Lost Cat

Lily is a little girl. She has a cat. The cat’s name is Mimi. Mimi is white and very cute. Every day, Lily plays with Mimi in the garden.

One day, Lily cannot find Mimi. She looks in the house. Mimi is not there. She looks in the garden. Mimi is not there, too. Lily is sad.

She asks her mom, "Mom, where is Mimi?"  
Her mom says, "I don’t know, Lily. Let’s look outside."

Lily and her mom walk outside. They call, "Mimi, Mimi!" But Mimi does not come. They walk to the park. They see a dog, a bird, and some flowers, but no Mimi.

Then, Lily hears a sound. "Meow!" She looks up. Mimi is in the tree!  
Lily is happy. She says, "Mimi, come down!" But Mimi is scared. She cannot come down.

Lily's mom calls the fireman. The fireman comes with a big ladder. He climbs the tree and helps Mimi come down.

Lily hugs Mimi. She says, "Thank you, Mr. Fireman!" The fireman smiles and says, "You’re welcome, Lily."

Now, Lily is happy. She takes Mimi home. They play together in the garden again.

This story is simple and uses basic vocabulary, perfect for someone learning English at an A1 level.`)
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
    volume: 1,
    rate: 0.41,
    highlightProps: { style: { color: "white", backgroundColor: "#1af", } }
    , lang, voiceURI,
  });
  return (
    <>
      <div className="App">
        <div>
          <label htmlFor="lang">Dil: </label>
          <select
            id="lang"
            value={lang}
            onChange={(e) => {
              setLang(e.target.value);
              setVoiceURI("");
            }}
          >
            <option value="">Dil Seç</option>
            {languages.map((lang) => (
              <option key={lang} value={lang}>
                {lang}
              </option>
            ))}
          </select>
        </div>
        <div>
          <label htmlFor="voice">Konuşmacı: </label>
          <select id="voice" value={voiceURI} onChange={(e) => setVoiceURI(e.target.value)}>
            <option value="">Konuşmacı Seç</option>
            {voices
              .filter((voice) => !lang || voice.lang === lang)
              .map(({ voiceURI }) => (
                <option key={voiceURI} value={voiceURI}>
                  {voiceURI}
                </option>
              ))}
          </select>
        </div>
        <div style={{ display: "flex", columnGap: "0.5rem" }}>
          {speechStatus !== "started" ? <button onClick={start}>Start</button> : <button onClick={pause}>Pause</button>}
          <button onClick={stop}>Stop</button>
        </div>
        <header className="App-header">
          <div style={{ display: "flex", padding: 70, flexDirection: "column", rowGap: "1rem" }}>
            <Text />
          </div>
          {/* <img src={logo} className="App-logo" alt="logo" /> */}
        </header>
      </div>
    </>
  );
}

export default App;
