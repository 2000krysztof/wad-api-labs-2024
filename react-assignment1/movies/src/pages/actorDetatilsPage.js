
import React from "react";
import {useParams} from "react-router-dom";
import { useQuery} from "react-query";
import { getActorDetails } from "../api/tmdb-api";

import Spinner from '../components/spinner'
import ActorDetails from "../components/actorDetails";


const ActorDetailsPage = (props) => {
	 const {id} = useParams();

  const { data: actor, error, isLoading, isError } = useQuery(
    ["actor", { id: id }],
   getActorDetails 
  );

  if (isLoading) {
    return <Spinner />;
  }

  if (isError) {
    return <h1>{error.message}</h1>;
  }

	return(
		<ActorDetails actor={actor}/>
	)

}

export default ActorDetailsPage;
