import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardMedia from "@material-ui/core/CardMedia";

import Flip from "react-reveal/Flip";
import Grid from "@material-ui/core/Grid";

import bg from "./images/bg.png";

import image1 from "./images/image1.jpg";

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
  const [isFlip, setFlip] = useState(false);



  return (
    <div>
    
    <Grid container>
        <Flip right spy={isFlip}>
            <Card className={classes.root}>
                <CardMedia className={classes.media} image={isFlip ? image1 : bg} onClick={() => setFlip(!isFlip)} />
            </Card>
        </Flip>
        <Flip right spy={isFlip}>
            <Card className={classes.root}>
                <CardMedia className={classes.media} image={isFlip ? image1 : bg} onClick={() => setFlip(!isFlip)} />
            </Card>
        </Flip>
        <Flip right spy={isFlip}>
            <Card className={classes.root}>
                <CardMedia className={classes.media} image={isFlip ? image1 : bg} onClick={() => setFlip(!isFlip)} />
            </Card>
        </Flip>
        <Flip right spy={isFlip}>
            <Card className={classes.root}>
                <CardMedia className={classes.media} image={isFlip ? image1 : bg} onClick={() => setFlip(!isFlip)} />
            </Card>
        </Flip>
        <Flip right spy={isFlip}>
            <Card className={classes.root}>
                <CardMedia className={classes.media} image={isFlip ? image1 : bg} onClick={() => setFlip(!isFlip)} />
            </Card>
        </Flip>
        <Flip right spy={isFlip}>
            <Card className={classes.root}>
                <CardMedia className={classes.media} image={isFlip ? image1 : bg} onClick={() => setFlip(!isFlip)} />
            </Card>
        </Flip>
        <Flip right spy={isFlip}>
            <Card className={classes.root}>
                <CardMedia className={classes.media} image={isFlip ? image1 : bg} onClick={() => setFlip(!isFlip)} />
            </Card>
        </Flip>
        <Flip right spy={isFlip}>
            <Card className={classes.root}>
                <CardMedia className={classes.media} image={isFlip ? image1 : bg} onClick={() => setFlip(!isFlip)} />
            </Card>
        </Flip>
        <Flip right spy={isFlip}>
            <Card className={classes.root}>
                <CardMedia className={classes.media} image={isFlip ? image1 : bg} onClick={() => setFlip(!isFlip)} />
            </Card>
        </Flip>
        <Flip right spy={isFlip}>
            <Card className={classes.root}>
                <CardMedia className={classes.media} image={isFlip ? image1 : bg} onClick={() => setFlip(!isFlip)} />
            </Card>
        </Flip>
        <Flip right spy={isFlip}>
            <Card className={classes.root}>
                <CardMedia className={classes.media} image={isFlip ? image1 : bg} onClick={() => setFlip(!isFlip)} />
            </Card>
        </Flip>
        <Flip right spy={isFlip}>
            <Card className={classes.root}>
                <CardMedia className={classes.media} image={isFlip ? image1 : bg} onClick={() => setFlip(!isFlip)} />
            </Card>
        </Flip>
        <Flip right spy={isFlip}>
            <Card className={classes.root}>
                <CardMedia className={classes.media} image={isFlip ? image1 : bg} onClick={() => setFlip(!isFlip)} />
            </Card>
        </Flip>
        <Flip right spy={isFlip}>
            <Card className={classes.root}>
                <CardMedia className={classes.media} image={isFlip ? image1 : bg} onClick={() => setFlip(!isFlip)} />
            </Card>
        </Flip>
        <Flip right spy={isFlip}>
            <Card className={classes.root}>
                <CardMedia className={classes.media} image={isFlip ? image1 : bg} onClick={() => setFlip(!isFlip)} />
            </Card>
        </Flip>
        <Flip right spy={isFlip}>
            <Card className={classes.root}>
                <CardMedia className={classes.media} image={isFlip ? image1 : bg} onClick={() => setFlip(!isFlip)} />
            </Card>
        </Flip>
        <Flip right spy={isFlip}>
            <Card className={classes.root}>
                <CardMedia className={classes.media} image={isFlip ? image1 : bg} onClick={() => setFlip(!isFlip)} />
            </Card>
        </Flip>
        <Flip right spy={isFlip}>
            <Card className={classes.root}>
                <CardMedia className={classes.media} image={isFlip ? image1 : bg} onClick={() => setFlip(!isFlip)} />
            </Card>
        </Flip>
        <Flip right spy={isFlip}>
            <Card className={classes.root}>
                <CardMedia className={classes.media} image={isFlip ? image1 : bg} onClick={() => setFlip(!isFlip)} />
            </Card>
        </Flip>
        <Flip right spy={isFlip}>
            <Card className={classes.root}>
                <CardMedia className={classes.media} image={isFlip ? image1 : bg} onClick={() => setFlip(!isFlip)} />
            </Card>
        </Flip>
        <Flip right spy={isFlip}>
            <Card className={classes.root}>
                <CardMedia className={classes.media} image={isFlip ? image1 : bg} onClick={() => setFlip(!isFlip)} />
            </Card>
        </Flip>
        <Flip right spy={isFlip}>
            <Card className={classes.root}>
                <CardMedia className={classes.media} image={isFlip ? image1 : bg} onClick={() => setFlip(!isFlip)} />
            </Card>
        </Flip>
        <Flip right spy={isFlip}>
            <Card className={classes.root}>
                <CardMedia className={classes.media} image={isFlip ? image1 : bg} onClick={() => setFlip(!isFlip)} />
            </Card>
        </Flip>
        <Flip right spy={isFlip}>
            <Card className={classes.root}>
                <CardMedia className={classes.media} image={isFlip ? image1 : bg} onClick={() => setFlip(!isFlip)} />
            </Card>
        </Flip>
        <Flip right spy={isFlip}>
            <Card className={classes.root}>
                <CardMedia className={classes.media} image={isFlip ? image1 : bg} onClick={() => setFlip(!isFlip)} />
            </Card>
        </Flip>
        <Flip right spy={isFlip}>
            <Card className={classes.root}>
                <CardMedia className={classes.media} image={isFlip ? image1 : bg} onClick={() => setFlip(!isFlip)} />
            </Card>
        </Flip>
        <Flip right spy={isFlip}>
            <Card className={classes.root}>
                <CardMedia className={classes.media} image={isFlip ? image1 : bg} onClick={() => setFlip(!isFlip)} />
            </Card>
        </Flip>
        <Flip right spy={isFlip}>
            <Card className={classes.root}>
                <CardMedia className={classes.media} image={isFlip ? image1 : bg} onClick={() => setFlip(!isFlip)} />
            </Card>
        </Flip>
        <Flip right spy={isFlip}>
            <Card className={classes.root}>
                <CardMedia className={classes.media} image={isFlip ? image1 : bg} onClick={() => setFlip(!isFlip)} />
            </Card>
        </Flip>
        <Flip right spy={isFlip}>
            <Card className={classes.root}>
                <CardMedia className={classes.media} image={isFlip ? image1 : bg} onClick={() => setFlip(!isFlip)} />
            </Card>
        </Flip>
        <Flip right spy={isFlip}>
            <Card className={classes.root}>
                <CardMedia className={classes.media} image={isFlip ? image1 : bg} onClick={() => setFlip(!isFlip)} />
            </Card>
        </Flip>
        <Flip right spy={isFlip}>
            <Card className={classes.root}>
                <CardMedia className={classes.media} image={isFlip ? image1 : bg} onClick={() => setFlip(!isFlip)} />
            </Card>
        </Flip>
        <Flip right spy={isFlip}>
            <Card className={classes.root}>
                <CardMedia className={classes.media} image={isFlip ? image1 : bg} onClick={() => setFlip(!isFlip)} />
            </Card>
        </Flip>
        <Flip right spy={isFlip}>
            <Card className={classes.root}>
                <CardMedia className={classes.media} image={isFlip ? image1 : bg} onClick={() => setFlip(!isFlip)} />
            </Card>
        </Flip>
        <Flip right spy={isFlip}>
            <Card className={classes.root}>
                <CardMedia className={classes.media} image={isFlip ? image1 : bg} onClick={() => setFlip(!isFlip)} />
            </Card>
        </Flip>
        <Flip right spy={isFlip}>
            <Card className={classes.root}>
                <CardMedia className={classes.media} image={isFlip ? image1 : bg} onClick={() => setFlip(!isFlip)} />
            </Card>
        </Flip>
        <Flip right spy={isFlip}>
            <Card className={classes.root}>
                <CardMedia className={classes.media} image={isFlip ? image1 : bg} onClick={() => setFlip(!isFlip)} />
            </Card>
        </Flip>
        <Flip right spy={isFlip}>
            <Card className={classes.root}>
                <CardMedia className={classes.media} image={isFlip ? image1 : bg} onClick={() => setFlip(!isFlip)} />
            </Card>
        </Flip>
        <Flip right spy={isFlip}>
            <Card className={classes.root}>
                <CardMedia className={classes.media} image={isFlip ? image1 : bg} onClick={() => setFlip(!isFlip)} />
            </Card>
        </Flip>
        <Flip right spy={isFlip}>
            <Card className={classes.root}>
                <CardMedia className={classes.media} image={isFlip ? image1 : bg} onClick={() => setFlip(!isFlip)} />
            </Card>
        </Flip>
        <Flip right spy={isFlip}>
            <Card className={classes.root}>
                <CardMedia className={classes.media} image={isFlip ? image1 : bg} onClick={() => setFlip(!isFlip)} />
            </Card>
        </Flip>
        <Flip right spy={isFlip}>
            <Card className={classes.root}>
                <CardMedia className={classes.media} image={isFlip ? image1 : bg} onClick={() => setFlip(!isFlip)} />
            </Card>
        </Flip>
        <Flip right spy={isFlip}>
            <Card className={classes.root}>
                <CardMedia className={classes.media} image={isFlip ? image1 : bg} onClick={() => setFlip(!isFlip)} />
            </Card>
        </Flip>
        <Flip right spy={isFlip}>
            <Card className={classes.root}>
                <CardMedia className={classes.media} image={isFlip ? image1 : bg} onClick={() => setFlip(!isFlip)} />
            </Card>
        </Flip>
        <Flip right spy={isFlip}>
            <Card className={classes.root}>
                <CardMedia className={classes.media} image={isFlip ? image1 : bg} onClick={() => setFlip(!isFlip)} />
            </Card>
        </Flip>
        <Flip right spy={isFlip}>
            <Card className={classes.root}>
                <CardMedia className={classes.media} image={isFlip ? image1 : bg} onClick={() => setFlip(!isFlip)} />
            </Card>
        </Flip>
        <Flip right spy={isFlip}>
            <Card className={classes.root}>
                <CardMedia className={classes.media} image={isFlip ? image1 : bg} onClick={() => setFlip(!isFlip)} />
            </Card>
        </Flip>
        <Flip right spy={isFlip}>
            <Card className={classes.root}>
                <CardMedia className={classes.media} image={isFlip ? image1 : bg} onClick={() => setFlip(!isFlip)} />
            </Card>
        </Flip>

    </Grid>
    
      
    </div>
  );
}


