import React from "react";
import Movie from "../movieCard";
import Grid from "@mui/material/Grid";

import { getMovieCast } from "../../api/tmdb-api";
import { useQuery } from "react-query";
import Spinner from '../../components/spinner';
import Header from "../headerMovieList";
import MovieCastList from "../movieCastList";
import { Paper } from "@mui/material";
import Typography from "@mui/material/Typography";



const MovieCast = (id) =>{
	
	
  const { data: data, error, isLoading, isError } = useQuery(
	["cast",  id ],
	 getMovieCast 
  );

  if (isLoading) {
    return <Spinner />;
  }

  if (isError) {
    return <h1>{error.message}</h1>;
  }

  const cast = data.cast;

  return (
    <Paper 
      component="div" 
      sx={{
        display: "flex",
        justifyContent: "space-around",
        flexWrap: "wrap",
        marginBottom: 1.5,
      }}
      >
      <Typography variant="h4" component="h3">
		 Cast 
      </Typography>
    <Grid container>
      <Grid container sx={{flex: "2 1 500px"}} >
        <MovieCastList action={()=>{}} cast={cast}></MovieCastList>
      </Grid>
    </Grid>
    </Paper>
  );


}

export default MovieCast;
