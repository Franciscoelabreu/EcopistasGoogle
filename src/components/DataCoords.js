import {Geo} from "../data/api";
import {Polyline} from "@react-google-maps/api";
import {useEffect, useState} from "react";

function DataCoords(props) {
	const [coordinates, setCoordinates] = useState("Loading")

	const red  = {strokeColor: '#FF0000'}
	const black  = {strokeColor: '#000000'}

  	useEffect( () => {
		Geo.getCoordinates(props.ecoID).then(res => 
			setCoordinates(res)
		);
	}, [])

	if(coordinates === "Loading") 
		return coordinates
  	else
	  if(props.selected==true)
	  	return (
	    	<Polyline path={coordinates} options={red}></Polyline>
	  	);
		  else
		  return (
	    	<Polyline path={coordinates} options={black}></Polyline>
	  	);

}
export default DataCoords;