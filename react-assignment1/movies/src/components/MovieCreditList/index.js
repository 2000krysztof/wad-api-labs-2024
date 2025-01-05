import React from "react";
import Grid from "@mui/material/Grid2";
import MovieCredit from "../MovieCredit";


const MovieCreditsList = (props) =>{
  let movieCredits = props.credits.map((m) => (
    <Grid key={m.id} size={{xs: 1, sm: 3, md: 3, lg: 4, xl: 4}} sx={{padding: "10px"}}>
	  <MovieCredit movie={m}/>
    </Grid>
  ));
  return movieCredits;

}

export default MovieCreditsList;
