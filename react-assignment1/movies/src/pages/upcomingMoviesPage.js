import React, { useState } from "react";
import { getUpcomingMovies} from "../api/tmdb-api";
import PageTemplate from '../components/templateMovieListPage';
import { useQuery } from 'react-query';
import Spinner from '../components/spinner';
import AddToFavoritesIcon from '../components/cardIcons/addToFavorites'
import AddToPlaylist from "../components/cardIcons/addToPlaylistIcon";

const UpcomingMoviesPage = () => {
	const [pageNumber, setPageNumber] = useState(1);
  const {  data, error, isLoading, isError }  = useQuery(['upcoming', pageNumber], getUpcomingMovies)

  if (isLoading) {
    return <Spinner />
  }

  if (isError) {
    return <h1>{error.message}</h1>
  }  
  const movies = data.results;

   return (
      <PageTemplate
        title="Upcoming Movies"
        movies={movies}
        action={(movie) => {
          return <AddToPlaylist movie={movie} />
        }}
		pageNumber={pageNumber}
		setPageNumber={setPageNumber}
      />
  );
};

export default UpcomingMoviesPage;
