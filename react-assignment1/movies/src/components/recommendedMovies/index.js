import React from "react";
import Movie from "../movieCard";
import Grid from "@mui/material/Grid";

import { getRecommendedMovies } from "../../api/tmdb-api";
import { useQuery } from "react-query";
import Spinner from '../../components/spinner';
import Header from "../headerMovieList";
import RecomendedMoviesList from "../RecommendedMoviesList";
import { Paper } from "@mui/material";
import Typography from "@mui/material/Typography";

const RecomendedMovies = (id) =>{

  const { data: data, error, isLoading, isError } = useQuery(
	["recommendations",  id ],
	  getRecommendedMovies
  );


  if (isLoading) {
    return <Spinner />;
  }

  if (isError) {
    return <h1>{error.message}</h1>;
  }

  const movies = data.results;


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
		 Recomended 
      </Typography>
    <Grid container>
      <Grid container sx={{flex: "2 1 500px"}} >
        <RecomendedMoviesList action={()=>{}} movies={movies}></RecomendedMoviesList>
      </Grid>
    </Grid>
    </Paper>
  );
};

export default RecomendedMovies;
