import React, { useState } from "react";
import { useQuery} from "react-query";
import { getNowPlayingMovies } from "../api/tmdb-api";
import Spinner from "../components/spinner";
import PageTemplate from '../components/templateMovieListPage';
import AddToFavorites from "../components/cardIcons/addToFavorites";




const NowPlayingMoviesPage = () => {
	const [pageNumber, setPageNumber] = useState(1);
	const {data, error, isLoading, isError} = useQuery(["now_playing",pageNumber], getNowPlayingMovies);

	if(isLoading){
		return <Spinner/>
	}

	if(isError){
		return <h1>{error.message}</h1>
	}
	
	const movies = data.results;
	return (
		<PageTemplate
			title = "Now Playing"
			movies = {movies}
			action = {(movie)=>{
				return <AddToFavorites movie = {movie}/>
			}}
		pageNumber={pageNumber}
		setPageNumber={setPageNumber}
		/>
	)

}

export default NowPlayingMoviesPage;
