import {Geo, Weather} from "../data/api";
import {useEffect, useState} from "react";
import WeatherComponent from "./WeatherComponent";
import {Container, AppLabel} from "../styles/WeatherStyles"

function DataDetails(props) {
	const [ecodetails, setEcodetails] = useState("Loading")
    const [weather, updateWeather] = useState();
	const pe = ecodetails.tempoPe
	const bike = ecodetails.tempoBike
	
	// controlo previne problema relacionado com o onload vs o update da prop.ecoID

	// {console.log( " ecoID no DataDetails " + props.ecoID)}

  	useEffect( () => {

        Geo.getEcoDetails(props.ecoID).then(res => 
			setEcodetails(res)
		);

		Weather.fetchWeather(props.local).then(res => 
			updateWeather(res)
		);
		
	},[])

	if(ecodetails === "Loading") 
		return ecodetails
  	else
	  	return (
			<>
			<div style={{textAlign: "center", fontSize: "13px", border: "1px solid #999", boxShadow: "0 3px 6px 0 #555", borderRadius: "5px", marginBottom:"5px"}}>
				<h3>Detalhes {ecodetails.name}</h3>
				<p>{ecodetails.designacao}</p>
				<p>Extensão do percurso {ecodetails.distancia} Km</p>
				<p>Percurso a pé {Math.floor(pe / 60)}h:{pe % 60}min</p>
				<p>Percurso de bicicleta {Math.floor(bike / 60)}h:{bike % 60}min</p>
			</div>
				<Container>
                  	<AppLabel>Previsão Meteorológica</AppLabel>
                    <WeatherComponent weather={weather} city={props.local} />
                </Container>
				</>
			);
}
export default DataDetails;
