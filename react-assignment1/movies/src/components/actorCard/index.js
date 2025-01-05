import React, { useContext  } from "react";
import Avatar from '@mui/material/Avatar';
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import CardActions from "@mui/material/CardActions";
import CardHeader from "@mui/material/CardHeader";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid2";
import { Link } from "react-router-dom";
import img from '../../images/film-poster-placeholder.png'
import { idAndNameToPersonId } from "../../util";

const ActorCard = (props)=>{
	const actor = props.actor;
	
	return (
		<Card>
			<CardHeader
			title={actor.name}
		/>
		<CardMedia
		sx={{ height: 500 }}
		image={
			actor.profile_path
			? `https://image.tmdb.org/t/p/w500/${actor.profile_path}`:
			img
		}

		/>

		<CardActions disableSpacing>
        <Link to={`/actorDetails/${idAndNameToPersonId(actor.id, actor.name)}`}>
          <Button variant="outlined" size="medium" color="primary">
            More Info ...
          </Button>
        </Link>
      </CardActions>
		</Card>
	);
}


export default ActorCard;
