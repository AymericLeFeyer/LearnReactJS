import React, { useState, useEffect } from "react";
import KeyboardEventHandler from "react-keyboard-event-handler";

import img1 from "../images/pendu/1.png";
import img2 from "../images/pendu/2.png";
import img3 from "../images/pendu/3.png";
import img4 from "../images/pendu/4.png";
import img5 from "../images/pendu/5.png";
import img6 from "../images/pendu/6.png";
import img7 from "../images/pendu/7.png";
import img8 from "../images/pendu/8.png";
import img9 from "../images/pendu/9.png";
import img10 from "../images/pendu/10.png";

import RubberBand from "react-reveal/RubberBand";

import {} from "random-words";

import Tilt from "react-tilt";

export default function Pendu() {
  const [baseLetters, setBaseLetters] = useState(initLetters());
  const [word] = useState("mistinguette");
  const [errors, setErrors] = useState(0);
  const [stateGame, setStateGame] = useState(0);

  useEffect(() => {
    if (errors === 10) {
      setStateGame(2);
    } 
  }, [errors])

  function initLetters() {
    let tab = [];
    for (let i = 0; i < 26; i++) {
      tab.push({
        value: String.fromCharCode("A".charCodeAt(0) + i),
        state: false,
      });
    }

    return tab;
  }

  function handleLetter(props) {


    if (stateGame === 2) return;

    const l = [...baseLetters];

    l.find((letter) => {
      if (letter.value === props.letter) {
        if (letter.state === false) {
          letter.state = true;
          return true;
        }
      }
      return false;
    });
    let isIn = false;
    for (let i = 1; i < word.split("").length-1; i++) {
      if (props.letter === word.split("")[i]) {
        isIn = true;
        break;
      }
    }
    if (isIn === false) {
      setErrors(errors + 1);
    }

    setBaseLetters(l);
  }

  function stateLetter(letter) {
    return baseLetters.find((lett) => {
      if (lett.value === letter) {
        return lett.state;
      }
      return false;
    });
  }

  function DisplayLetters() {
    return baseLetters.map((letter, i) => {
      return (
        <Tilt className="Tilt" options={{ max: 50, scale: 1.2 }} key={i}>
          <RubberBand spy={letter.state} key={i}>
            <div className="lettersButtons">
              <button
                type="button"
                className={
                  letter.state ? "btn btn-secondary" : "btn btn-primary"
                }
                onClick={() => handleLetter({ letter: letter.value })}
              >
                {letter.value}
              </button>
            </div>
          </RubberBand>
        </Tilt>
      );
    });
  }

  function DisplayWord() {
    let lett = word.split("");
    let newWord = lett[0];
    let nbEmpty = 0;
    for (let i = 1; i < lett.length - 1; i++) {
      if (stateLetter(lett[i])) {
        newWord += lett[i];
      }
      else if (lett[i] === ' ') {
        newWord += ' ';
      }
      else {
        if (stateGame !== 2) {
          newWord += '_';
          nbEmpty++;
        }
        else {
          newWord += lett[i];
          nbEmpty++;
        }
        
      }
    }
    if (nbEmpty === 0) setStateGame(1);

    newWord += lett[lett.length - 1];

    return <div>{newWord}</div>;
  }

  function imagePendu() {
    switch (errors) {
      case 1:
        return img1;
      case 2:
        return img2;
      case 3:
        return img3;
      case 4:
        return img4;
      case 5:
        return img5;
      case 6:
        return img6;
      case 7:
        return img7;
      case 8:
        return img8;
      case 9:
        return img9;
      case 10:
        return img10;
      default:
        return "";
    }
  }

  function DisplayPendu() {
    const img = imagePendu();
    return(
      <img alt="pendu" src={img} className="imagePendu"></img>
    ) 

  }

  return (
    <div>
      <h1>Pendu</h1>

      <div className="row">
        <DisplayLetters />
      </div>
      <h4 className="errorsPendu">
        {errors > 1 ? "Nombre d'erreurs : " : "Nombre d'erreur : "} {errors}
      </h4>
      {stateGame === 1 ? <h3>Gagné !</h3> : stateGame === 2 ? <h3>Perdu :(</h3> : null}

      <h2 className="wordPendu">
        <DisplayWord />
      </h2>

      {errors > 0 ? <DisplayPendu /> : null}
      

      <KeyboardEventHandler
        handleKeys={["alphabetic"]}
        onKeyEvent={(key, e) => handleLetter({ letter: key })}
      />
    </div>
  );
}
