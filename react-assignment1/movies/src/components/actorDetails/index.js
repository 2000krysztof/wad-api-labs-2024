import React, { useState } from "react";

import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import { Grid } from "@mui/system";

import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import img from '../../images/film-poster-placeholder.png'
import { Chip } from "@mui/material";
import { Cake, StarRate } from "@mui/icons-material";
import {PiGenderNonbinary, PiGenderMale, PiGenderFemale} from "react-icons/pi"
import MovieCredits from "../MovieCredits";

const ActorDetails = ({actor}) =>{
	
	const root = {
		display: "flex",
		justifyContent: "center",
		flexWrap: "wrap",
		listStyle: "none",
		padding: 1.5,
		margin: 0,
		
		
	};
	console.log(actor);

	let birthDayAndPlace = ""
	birthDayAndPlace += actor.birthday? actor.birthday:"";
	birthDayAndPlace += "  ";
	birthDayAndPlace += actor.place_of_birth? actor.place_of_birth:"";
	

	const genderChip = (gender)=>{
		let icon;
		switch(gender){
			case 0:
				return;
			case 1:
				icon = <PiGenderFemale/>
				break;
			case 2:
				icon = <PiGenderMale/>
				break;
			case 3:
				icon = <PiGenderNonbinary/>
			default:
				return;
		}
		return (
		<Chip
			icon= {icon}
			sx = {{margin:1}}
		/>)
	}

	return (
	<Grid container sx={{...root}}>
		
      <Paper sx={{...root}}>
		<Grid container
		direction="row"
		sx={{
			justifyContent: "center",
				alignItems: "center",
		}}>

		<Card>
			<CardMedia
		sx={{ height: 500, width: 300}}
		image={
			actor.profile_path
			? `https://image.tmdb.org/t/p/w500/${actor.profile_path}`:
			img
		}
		/>
		</Card>
		<Grid container
		direction="column"
		sx={{
			...root,
		}}
		>

		<Chip 
			label = {actor.name}
			color = "primary"
			sx = {{margin:1}}
		/>
		<Chip 
			icon = <StarRate/> 
			label = {actor.popularity}
			sx = {{margin:1}}
		/>
		<Chip
			icon= <Cake/>
			label = {birthDayAndPlace}
			sx = {{margin:1}}
		/>
		{genderChip(actor.gender)}	

		</Grid>
			
		</Grid>
      </Paper>
      <Paper>
        
      <Typography variant="h5" component="h3">
       Biography 
      </Typography>

      <Typography variant="h6" component="p">
        {actor.biography}

      </Typography>
      <Typography variant="h6" component="p">
		<MovieCredits id={actor.id}/>
      </Typography>
      </Paper>
	</Grid>
	)

}

export default ActorDetails;
