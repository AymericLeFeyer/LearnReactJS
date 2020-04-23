import React, { useState } from "react";
import KeyboardEventHandler from "react-keyboard-event-handler";

export default function Pendu() {
  const [baseLetters, setBaseLetters] = useState(initLetters());

  function initLetters() {
    let tab = [];
    for (let i = 0; i < 26; i++) {
      tab.push({
        value: String.fromCharCode('a'.charCodeAt(0)+i),
        state: false,
      });
    }

    return tab;
  }

  function handleLetter(props) {
    const l = [...baseLetters];
    l.find((letter) => {
        if (letter.value === props.letter) {
            if (letter.state === false) {
                letter.state = true;
                return true;
            }
        }
        return false;
    })
    setBaseLetters(l);

    
    
  }

  function DisplayLetters() {
    return baseLetters.map((letter, i) => {
      return <p>{letter.state ? '('+letter.value+')' : letter.value }</p>;
    });
  }

  return (
    <div>
      <h1>Pendu</h1>
      <DisplayLetters />
      <KeyboardEventHandler
        handleKeys={["alphabetic"]}
        onKeyEvent={(key, e) => handleLetter({ letter: key })}
      />
    </div>
  );
}
