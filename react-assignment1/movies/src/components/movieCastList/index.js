import React from "react";
import ActorCard from "../actorCard";
import Grid from "@mui/material/Grid2";

const MovieCastList = (props) => {
  let actorCards = props.cast.map((m) => (
    <Grid key={m.id} size={{xs: 1, sm: 2, md: 3, lg: 4, xl: 4}} sx={{padding: "10px"}}>
      <ActorCard key={m.id} actor={m} action={props.action} />
    </Grid>
  ));
  return actorCards;
};

export default MovieCastList;
