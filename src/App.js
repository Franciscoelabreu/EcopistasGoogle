import React from "react";
import { GoogleMap, Marker, useLoadScript } from "@react-google-maps/api";
import "./App.css"
import mapStyles from "./styles/mapStyles";

import {Geo} from "./data/api";
import DataCoords from "./components/DataCoords";
import DataNameList from "./components/DataNameList";
import {useEffect, useState} from "react";

const containerStyle = {  width: '100vw', height: '100vh'};
const initialPosition = { lat: 39.596802, lng: -11 };
const initialZoom = 7.5;
const markerPosition = { lat: 40.6412, lng: -8.65362 };
const options = { styles: mapStyles};

export default function App () {
    const [position, setPosition] = useState(initialPosition);
    const [econames, setDatanames] = useState();
    const [track, setTrack] = useState();
  
    useEffect( () => {
            Geo.availableNames().then(res => 
            setDatanames(res)
        );
    }, [])

    // Hook de controlo de carregamento do mapa
    const { isLoaded, loadError } = useLoadScript({
        googleMapsApiKey: process.env.REACT_APP_GOOGLE_MAPS_API_KEY,
      });      

    if (loadError) return "Error Loading Map";
    if (!isLoaded) return "Loading Page";


    const selectEcoPista=(index)=>{
        setTrack(index);
        setPosition(econames[index].coords);
    }

    let dataCoords = []
    for (let i = 0 ; i < econames.length; i++)
        dataCoords.push(<DataCoords key={i} ecoID={i} selected={track === i ? true:false}/>)
        
    return (
                <div>
                    <div className="infobox">
                    <h2 >Ecopistas@Google</h2>
                    <DataNameList func={selectEcoPista}/>
                </div>

                <GoogleMap
                    mapContainerStyle={containerStyle}
                    center={position}
                    zoom={initialZoom}
                    options={options}>
                        <Marker position={markerPosition}></Marker>
                        {dataCoords} 
                </GoogleMap>
            </div>
            )
    }
