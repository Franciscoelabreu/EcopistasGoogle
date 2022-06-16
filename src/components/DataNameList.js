import {Geo} from "../data/api";
import {useEffect, useState} from "react";
import DataDetails from "./DataDetails";
import React from "react";


function DataNameList(props) {

	const [econames, setDatanames] = useState("Loading");
	const [ecoLocal, setEcoLocal] = useState("Viana do Castelo,pt");
  const [ecoPistaID, setEcoPistaID] = useState(0);
  const [shift, setShift] = useState(0);
  
    useEffect( () => {
          Geo.availableNames().then(res => 
    setDatanames(res)
      );
    }, [])

    const setLocal = (local, localid, newIndex) => {
      setEcoLocal(local);
      setEcoPistaID(localid);
      props.func(localid);
      setShift(newIndex);
    //console.log("local  " + local + " id  " + localid);
    }
   

	if(econames === "Loading")
		return econames
  	else
      if (shift === 0)
	  	  return (
            <div>
              <ul style={{ listStyleType: "none", padding: "0px", textAlign: "center"}}>
                  {econames.map(item => (
                  <li key={item.id}>
                  <button style={{width:"320px", height:"30px", marginBottom: "5px"}} onClick={() => setLocal(item.nome_munic, item.id, 1 )}>{item.name}</button>
                  </li>))}
              </ul>
            </div>);
        else
        return (
            <div>
                <DataDetails ecoID={ecoPistaID} local={ecoLocal}/>
                <button style={{ width:"320px", height:"30px", border: "1px solid #999", boxShadow: "0 3px 6px 0 #555", marginBottom:"5px", marginTop:"5px", borderRadius: "5px"}} onClick={() => setShift(0)}>Voltar a pesquisa</button>
                {/* {console.log("ecoLocal  " + ecoLocal + " ecoPistaID  " + ecoPistaID)} */}
            </div>);
}
export default DataNameList;
