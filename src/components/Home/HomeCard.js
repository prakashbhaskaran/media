import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";

import CardContent from "@material-ui/core/CardContent";

import Typography from "@material-ui/core/Typography";
import { Grid } from "@material-ui/core";
import ReactReadMoreReadLess from "react-read-more-read-less";

const useStyles = makeStyles({
  root: {
    minWidth: 200,
    height: "100%",
  },

  title: {
    fontSize: 20,
  },
  topic: {
    fontSize: 20,
    textTransform: "uppercase",
  },
  pos: {
    marginBottom: 12,
  },
  word: {
    whiteSpace: "pre-wrap",
  },
  color1: {
    color: "green",
  },
  color2: {
    color: "red",
  },
});

export default function HomeCard({ pname, comment, date, topic }) {
  const classes = useStyles();

  return (
    <Grid item>
      <Card className={classes.root} variant="outlined">
        <CardContent>
          <Typography
            className={classes.title}
            color="textSecondary"
            gutterBottom
          >
            {pname}
          </Typography>

          <Typography className={classes.pos} color="textSecondary">
            {date}
          </Typography>

          <Typography
            className={classes.topic}
            color="textPrimary"
            gutterBottom
          >
            {topic}
          </Typography>

          <Typography component="p" className="content">
            <ReactReadMoreReadLess
              charLimit={250}
              readMoreText={"SHOW MORE"}
              readLessText={"SHOW LESS"}
              readMoreClassName={classes.color1}
              readLessClassName={classes.color2}
            >
              {comment}
            </ReactReadMoreReadLess>
          </Typography>
        </CardContent>
      </Card>
    </Grid>
  );
}
