import { Grid } from "@material-ui/core";
import React, { useState, useEffect } from "react";
import Comment from "../CommentForm/Comment";
import HomeCard from "./HomeCard";
import { fdata } from "../Fake";

const Home = () => {
  const [items, setItems] = useState([]);
  useEffect(() => {
    setItems(fdata);
  }, []);
  const cardcontainer = {
    padding: "20px",
    minHeight: "100vh",
    maxWidth: "100%",
    margin: "auto",
  };

  return (
    <div style={cardcontainer}>
      <Comment changeData={(data) => setItems([...items, data])} />
      <Grid container spacing={4} direction="column" justifyContent="center">
        {items.map((items, index) => {
          return (
            <HomeCard
              pname={items.pname}
              topic={items.topic}
              comment={items.comment}
              date={items.date}
              key={index}
            />
          );
        })}
      </Grid>
    </div>
  );
};

export default Home;
