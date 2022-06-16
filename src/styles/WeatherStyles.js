import styled from "styled-components";

export const WeatherIcons = {
    "01d": "/icon/sunny.svg",
    "01n": "/icon/night.svg",
    "02d": "/icon/day.svg",
    "02n": "/icon/cloudy-night.svg",
    "03d": "icon/cloudy.svg",
    "03n": "/icon/cloudy.svg",
    "04d": "/icon/perfect-day.svg",
    "04n": "/icon/cloudy-night.svg",
    "09d": "/icon/rain.svg",
    "09n": "/icon/rain-night.svg",
    "10d": "/icon/rain.svg",
    "10n": "/icon/rain-night.svg",
    "11d": "/icon/storm.svg",
    "11n": "/icon/storm.svg",
};

export const WeatherInfoIcons = {
    sunset: "/icon/temp.svg",
    sunrise: "/icon/temp.svg",
    humidity: "/icon/humidity.svg",
    wind: "/icon/wind.svg",
    pressure: "/icon/pressure.svg",
};

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 300px;
  padding: 20px 10px;
  margin: auto;
  border-radius: 4px;
  box-shadow: 0 3px 6px 0 #555;
  background: white;
  font-family: 'Roboto','Arial','sans-serif';
`;

export const AppLabel = styled.span`
  color: black;
  margin: 5px auto;
  font-size: 18px;
  font-weight: bold;
`;

export const Location = styled.span`
  margin: 5px auto;
  text-transform: capitalize;
  font-size: 24px;
  font-weight: bold;
`;
export const Condition = styled.span`
  margin: 5px auto;
  text-transform: capitalize;
  font-size: 14px;
  & span {
    font-size: 24px;
  }
`;
export const WeatherInfoLabel = styled.span`
  margin: 0px;
  text-transform: capitalize;
  text-align: start;
  width: 70%;
  font-weight: bold;
  font-size: 14px;
`;
export const WeatherIcon = styled.img`
  width: 70px;
  height: 70px;
  margin: 5px auto;
`;
export const WeatherContainer = styled.div`
  display: flex;
  width: 100%;
  margin: 10px auto;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const WeatherInfoContainer = styled.div`
  display: flex;
  width: 90%;
  flex-direction: row;
  justify-content: space-evenly;
  align-items: center;
  flex-wrap: wrap;
`;
export const InfoContainer = styled.div`
  display: flex;
  margin: 5px 10px;
  flex-direction: row;
  justify-content: space-evenly;
  align-items: center;
`;
export const InfoIcon = styled.img`
  width: 36px;
  height: 36px;
`;
export const InfoLabel = styled.span`
  display: flex;
  flex-direction: column;
  font-size: 14px;
  margin: 15px;
  & span {
    font-size: 12px;
    text-transform: capitalize;
  }
`;