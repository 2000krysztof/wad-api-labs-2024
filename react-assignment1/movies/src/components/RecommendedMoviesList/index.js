import React from "react";
import Movie from "../movieCard/";
import Grid from "@mui/material/Grid2";

const RecomendedMoviesList = (props) => {
  let movieCards = props.movies.map((m) => (
    <Grid key={m.id} size={{xs: 1, sm: 3, md: 3, lg: 4, xl: 4}} sx={{padding: "10px"}}>
      <Movie key={m.id} movie={m} action={props.action} />
    </Grid>
  ));
  return movieCards;
};

export default RecomendedMoviesList;
