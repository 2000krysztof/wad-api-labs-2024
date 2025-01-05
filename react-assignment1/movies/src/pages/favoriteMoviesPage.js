import React, { useContext } from "react";
import PageTemplate from "../components/templateMovieListPage";
import { MoviesContext } from "../contexts/moviesContext";
import { useQueries, useQuery } from "react-query";
import { getMovie } from "../api/tmdb-api";
import Spinner from '../components/spinner'
import RemoveFromFavorites from "../components/cardIcons/removeFromFavorites";
import WriteReview from "../components/cardIcons/writeReview";
import {getFavouriteMovies} from "../api/movies-api";

const FavoriteMoviesPage = () => {

	const { data: result, error, isLoading, isError } = useQuery(
		"Favourites",
		getFavouriteMovies
	)
	

  if (isLoading) {
    return <Spinner />;
  }
  const movies = result.results;

  const toDo = () => true;

 return (
    <PageTemplate
      title="Favorite Movies"
      movies={movies}
      action={(movie) => {
        return (
          <>
            <RemoveFromFavorites movie={movie} />
            <WriteReview movie={movie} />
          </>
        );
      }}
    />
  );
};

export default FavoriteMoviesPage;
