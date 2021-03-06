import React, { useState } from "react";
import { CardMedia, Card, makeStyles, Grid } from "@material-ui/core";

import Flip from "react-reveal/Flip";
import RubberBand from "react-reveal/RubberBand";

import Tilt from "react-tilt";

import bg from "../images/memory/bg.png";
import image1 from "../images/memory/image1.jpg";
import image2 from "../images/memory/image2.jpg";
import image3 from "../images/memory/image3.jpg";
import image4 from "../images/memory/image4.jpg";
import image5 from "../images/memory/image5.jpg";
import image6 from "../images/memory/image6.jpg";

const useStyles = makeStyles({
  cardStyle: {
    maxWidth: 345,
    margin: 10,
    boxShadow: '2px 2px 10px black'
  },
  cardMedia: {
    height: 150,
    width: 150,
  },
  div: {
    width: 680,
  },

});

const tiles = 12;
const timeBeforeFlip = 1500;

export default function Memory() {
  const classes = useStyles();
  const [coups, setCoups] = useState(0);
  const [cards, setCards] = useState(shuffle());
  const [canFlip, setCanFlip] = useState(true);
  const [pairsFound, setPairsFound] = useState(0);

  function shuffle() {
    let cards = [];
    for (let i = 0; i < tiles; i++) {
      let image = "";
      if (i === 0 || i === 1) image = image1;
      if (i === 2 || i === 3) image = image2;
      if (i === 4 || i === 5) image = image3;
      if (i === 6 || i === 7) image = image4;
      if (i === 8 || i === 9) image = image5;
      if (i === 10 || i === 11) image = image6;

      cards[i] = {
        id: i,
        pairId: i % 2 === 0 ? i + 1 : i - 1,
        img: image,
        isSolved: false,
        isFlip: false,
      };
    }
    cards.sort(() => Math.random() - 0.5);
    return cards;
  }

  const handleClic = (id) => {
    if (canFlip) {
      const c = [...cards];

      c.find((card) => {
        if (card.id === id && !card.isSolved) {
          card.isFlip = card.isFlip ? false : true;
          return true;
        }
        return false;
      });

      setCards(c);
      flipBoth();
    }
  };

  function flipBoth() {
    const c = [...cards];
    let flipCards = [];
    for (let i = 0; i < tiles; i++) {
      if (c[i].isFlip && !c[i].isSolved) {
        flipCards.push(c[i]);
      }
    }

    if (flipCards.length === 2) {
      setCanFlip(false);
      if (!check(flipCards[0], flipCards[1])) {
        setTimeout(() => {
          setCanFlip(true);
          handleClic(flipCards[0].id);
          handleClic(flipCards[1].id);
          setCoups(coups + 1);
        }, timeBeforeFlip);
      }
    }
  }

  function restartGame() {
    setCards(shuffle());
    setCoups(0);
    setPairsFound(0);
  }

  function check(c1, c2) {
    if (c1.id === c2.pairId) {
      c1.isSolved = true;
      c2.isSolved = true;
      setCanFlip(true);
      setCoups(coups + 1);
      setPairsFound(pairsFound + 1);

      return true;
    }
    return false;
  }

  function Infos() {
    return (
      <div>
        <Grid container alignItems="center">
          <Grid item xs>
            <h1 className="center">Memor'Emilie</h1>
          </Grid>
        </Grid>
        
        <Grid container alignItems="center">
          <Grid item xs>
            <p>{coups > 1 ? "Coups : " : "Coup : "}{coups}</p>
          </Grid>
          <Grid item xs>
            <RestartButton />
          </Grid>
        </Grid>
      </div>
    );
  }

  function DisplayCard(props) {
    return (
      <div>
        <Card className={classes.cardStyle}>
          <CardMedia
            className={classes.cardMedia}
            image={props.card.isFlip ? props.card.img : bg}
            onClick={() =>
              props.card.isFlip ? null : handleClic(props.card.id)
            }
          />
        </Card>
      </div>
    );
  }

  function End() {
    return (
      <div>
        <h3>Bien joué !</h3>
      </div>
    );
  }

  function RestartButton() {
    return (
      <div>
        <button
          type="button"
          className="btn btn-primary"
          onClick={() => restartGame()}
        >
          Recommencer
        </button>
      </div>
    );
  }

  return (
    <div>
      <Infos />
      <div className={classes.div}>
        <Grid container>
          {cards.map((card, i) => {
            return (
              <Tilt className="Tilt" options={{ max: 50, scale: 1.2 }} key={i}>
                <Flip left spy={card.isFlip} key={i}>
                  <RubberBand spy={card.isSolved} key={i}>
                    <DisplayCard card={card} />
                  </RubberBand>
                </Flip>
              </Tilt>
            );
          })}
        </Grid>
      </div>
      {pairsFound === tiles / 2 ? <End /> : null}
    </div>
  );
}
