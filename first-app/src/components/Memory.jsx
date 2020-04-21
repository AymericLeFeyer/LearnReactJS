import React, { useState } from "react";
import { CardMedia, Card, makeStyles, Grid } from "@material-ui/core";

import { Flip, RubberBand } from "react-reveal";

import bg from "../images/bg.png";
import image1 from "../images/image1.jpg";
import image2 from "../images/image2.jpg";
import image3 from "../images/image3.jpg";
import image4 from "../images/image4.jpg";
import image5 from "../images/image5.jpg";
import image6 from "../images/image6.jpg";

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
  },
  media: {
    height: 150,
    width: 150,
  },
});

const tiles = 12;
const timeBeforeFlip = 1600;
let canFlip = true;

export default function MediaCard() {
  const classes = useStyles();
  const [cards, setCards] = useState(shuffle());

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
        if (card.id === id) {
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
      canFlip = false;
      if (!check(flipCards[0], flipCards[1])) {
        setTimeout(() => {
          canFlip = true;
          handleClic(flipCards[0].id);
          handleClic(flipCards[1].id);
        }, timeBeforeFlip);
      }
    }
  }

  function check(c1, c2) {
    if (c1.id === c2.pairId) {
      c1.isSolved = true;
      c2.isSolved = true;
      canFlip = true;

      return true;
    }
    return false;
  }

  return (
    <div>
      <Grid container>
        {cards.map((card) => {
          return (
            <div>
              
                <Flip spy={card.isFlip}>
                
                  <Card className={classes.root}>
                    <CardMedia
                      className={classes.media}
                      image={card.isFlip ? card.img : bg}
                      onClick={() => handleClic(card.id)}
                    />
                  </Card>
                  
                </Flip>
              
            </div>
          );
        })}
      </Grid>
    </div>
  );
}
