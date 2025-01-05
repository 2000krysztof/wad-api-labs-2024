
import movieModel from './movieModel';
import asyncHandler from 'express-async-handler';
import express from 'express';
import {
  getUpcomingMovies,
	getGenres,
	getMovie
} from '../tmdb-api';

const router = express.Router();

router.get('/', asyncHandler(async (req, res) => {
    let { page = 1, limit = 10 } = req.query; // destructure page and limit and set default values
    [page, limit] = [+page, +limit]; //trick to convert to numeric (req.query will contain string values)

    // Parallel execution of counting movies and getting movies using movieModel
    const [total_results, results] = await Promise.all([
        movieModel.estimatedDocumentCount(),
        movieModel.find().limit(limit).skip((page - 1) * limit)
    ]);
    const total_pages = Math.ceil(total_results / limit); //Calculate total number of pages (= total No Docs/Number of docs per page) 

    //construct return Object and insert into response object
    const returnObject = {
        page,
        total_pages,
        total_results,
        results
    };
    res.status(200).json(returnObject);
}));

const getMoviesByIds = async (movieIds) =>{
    if (!Array.isArray(movieIds)) {
        throw new Error("movieIds must be an array");
    }
    
    const movies = await Promise.all(movieIds.map(id => getMovie(id))); // Assumes getMovie is your movie-fetching function
    return { total_results: movies.length, results: movies };
}

router.get("/favourites", asyncHandler(async (req, res)=>{
	if(!req.user){
		return res.status(404).json({message: "User Not found", status_code:404});
	}
	const favourites = await getMoviesByIds(req.user.favourites);
	res.status(200).json(favourites);
}));


// Get movie details
router.get('/:id', asyncHandler(async (req, res) => {
    const id = parseInt(req.params.id);
    const movie = await movieModel.findByMovieDBId(id);
    if (movie) {
        res.status(200).json(movie);
    } else {
        res.status(404).json({message: 'The movie you requested could not be found.', status_code: 404});
    }
}));



router.get('/tmdb/upcoming', asyncHandler(async (req, res) => {
    const upcomingMovies = await getUpcomingMovies();
    res.status(200).json(upcomingMovies);
}));

router.get("/tmdb/genres", asyncHandler(async (req, res)=>{
	const genres = await getGenres();
	res.status(200).json(genres);
}));


router.get("/tmdb/getMany", asyncHandler(async (req, res)=>{
	try {
        const movieIds = req.body.movieIds;
        if (!Array.isArray(movieIds)) {
            return res.status(400).json({ message: "movieIds must be an array" });
        }

        const movies = await Promise.all(movieIds.map(id => getMovie(id)));

        res.status(200).json({ total_results: movies.length, results: movies });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Failed to fetch movies" });
    }

}));

router.get("/tmdb/:id", asyncHandler(async (req, res)=>{
    const id = parseInt(req.params.id);
	const movie = await getMovie(id);
	res.status(200).json(movie);
}));

export default router;
