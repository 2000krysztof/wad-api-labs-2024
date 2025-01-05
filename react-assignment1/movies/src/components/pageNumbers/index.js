import React, { useState, useContext } from "react";
import { MoviesContext } from "../../contexts/moviesContext";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid2";


const makeButton = (number, setPageNumber)=>{

	return (<Button 
		onClick={() => {setPageNumber(number)}}> 
		{number} 
	</Button>);
}



const PageNumbers = ({pageNumber, setPageNumber}) => {
	if(pageNumber == undefined){
		return;
	}
	const buttons = []

	const startingNumber = pageNumber>5? pageNumber-3 : 1;
	
	if (startingNumber != 1){
			buttons.push(makeButton(1,setPageNumber))
			buttons.push(
					<Button>{"..."}</Button>
			)
	}
	
	for(let i = startingNumber; i<startingNumber + 10; i++){
		if( i != pageNumber){
			buttons.push(makeButton(i,setPageNumber));
		}
		else{
			buttons.push(
					<Button><b>{i}</b></Button>
			)
		}
	}
	return (
		<Grid container direction = "row" sx={{justifyContent: "center",alignItems: "flex-start",}}>
		{buttons}
		</Grid>

	)
}

export default PageNumbers;
