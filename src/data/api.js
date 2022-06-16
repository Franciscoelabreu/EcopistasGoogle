import axios from 'axios';

const apikey = "fe4feefa8543e06d4f3c66d92c61b69c";
// verificar porque não funciona !!!
//const apikey = process.env.REACT_APP_OPENWEATHERMAP_API_KEY;

const Weather = axios.create({});

Weather.fetchWeather = function (local) {
    return new Promise((resolve, reject) => {
        const endpoint = `https://api.openweathermap.org/data/2.5/weather?q=${local}&appid=${apikey}`;
        Weather.get(endpoint).then(res => {
            resolve(res.data)
        })
        .catch (err => {reject(err)})
   });
};

const baseEndpoint = "http://localhost:3001/data"

const Geo = axios.create({});

Geo.availableNames = function () {
    return new Promise((resolve, reject) => {
        Geo.get(baseEndpoint).then(res => {
            let data = res.data.features;
            let econames = [];
            console.log(data);
            for (let i = 0 ; i < data.length ; i++){
//                console.log(data[i].properties.nomeecopis)
                econames.push({ 
                    "id" : data[i].id, 
                    "name" : data[i].properties.nomeecopis,
                    "nome_munic": data[i].properties.nome_munic,
//  primeiro par de cordenadas de cada ecopista para reposicionamento do mapa
                    "coords":{
                        "lat":data[i].geometry.coordinates[0][1],
                        "lng":data[i].geometry.coordinates[0][0]
                    }
                });
            }
//            console.log(econames);
            resolve(econames);
        })
        .catch (err => {reject(err)})
   });
};

Geo.getCoordinates = function (id) {
    return new Promise((resolve, reject) => {
        Geo.get(baseEndpoint).then(res => {
// filtro de array pela passagem de propriedade do ID
            let data = res.data.features.filter(x => x.id === id );

            if (data.length === 0)
                resolve(data);

            let geometry = data[0].geometry.coordinates;
            let coordinates = [];
// Iterar o array e troca de posição das cordenadas
            for (let i = 0 ; i < geometry.length ; i++){
                coordinates.push({
                    "lat":geometry[i][1],
                    "lng":geometry[i][0]
                })
            }
            resolve(coordinates);
        })
        .catch (err => {reject(err)}) 
   });
};

Geo.getEcoDetails = function (id) {
    return new Promise((resolve, reject) => {
        Geo.get(baseEndpoint).then(res => {
//            {console.log( " id na api  " + id)}
// filtro de array pela passagem de propriedade do ID
            let data = res.data.features.filter(x => x.id === id );
// metodo para contornar o arr estar nulo
            if (data.length === 0)
                resolve(data);
                data = data[0];
            let dist = Number(data.properties.extensao_1.split("Km")[0].replace(",","."));
            let ecodetails = { 
                    "id" : data.id, 
                    "name" : data.properties.nomeecopis,
                    "designacao" : data.properties.designacao,
                    "distancia" : dist,
                    "tempoPe": Math.floor((dist/6) * 60),
                    "tempoBike": Math.floor((dist/20) * 60)
                };
            resolve(ecodetails);
        })
        .catch (err => {reject(err)}) 
   });
};

export {Geo, Weather};