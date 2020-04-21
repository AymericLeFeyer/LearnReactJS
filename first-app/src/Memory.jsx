import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardMedia from "@material-ui/core/CardMedia";

import Flip from "react-reveal/Flip";
import Grid from "@material-ui/core/Grid";

import bg from "./images/bg.png";

import image1 from "./images/image1.jpg";
import { CardContent } from "@material-ui/core";

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
  },
  media: {
    height: 150,
    width: 150,
  },
});

export default function MediaCard() {
  const classes = useStyles();
  const [cards, setCards] = useState(shuffle());

  function shuffle() {
    let cards = [];
    for (let i = 0; i < 12; i++) {
      cards[i] = {
        id: i,
        pairId: i % 2 === 0 ? i+1 : i-1,
        solved: false,
        isFlip: false,
      };
    }
    cards.sort(() => Math.random() - 0.5);
    return cards;
  }

  const handleClic = (id) => {
    const c = [...cards];
    c.find((card) => {
      if (card.id === id) {
        card.isFlip = card.isFlip ? false : true;
        return true;
      }
      return false;
    });

    setCards(c);
  };

  return (
    <div>
      <Grid container>
        {cards.map((card) => {
          return (
            <div>
              <Flip right spy={card.isFlip}>
                <Card className={classes.root}>
                  <CardMedia
                    className={classes.media}
                    image={card.isFlip ? image1 : bg}
                    onClick={() => handleClic(card.id)}
                  />
                  <CardContent>{card.id} -> {card.pairId}</CardContent>
                </Card>
              </Flip>
            </div>
          );
        })}
      </Grid>
    </div>
  );
}
