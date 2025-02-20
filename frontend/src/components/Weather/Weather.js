/* eslint-disable array-callback-return */
/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from "react";
import axios from "axios";
import { GiPositionMarker } from "react-icons/gi";
import "../Weather/Weather.css";
import { useDispatch, useSelector } from "react-redux";

import forecastSlice, { setForecast } from "../redux/reducers/weather";
import Loader from "../Loader/Loader";

function Weather() {
  const dispatch = useDispatch();
  const { forecast } = useSelector((state) => {
    return {
      forecast: state.forecast.forecast,
    };
  });
  const [loader, setLoader] = useState(true);

  const dayOfWeek = (date) => {
    const now = new Date();

// Getting various components of the date and time
// const year = now.getFullYear();
// const month = now.getMonth() + 1; // Note: January is 0
// const day = now.getDate();
const hours = now.getHours();
console.log(hours);
const minutes = now.getMinutes();
const seconds = now.getSeconds();
const milliseconds = now.getMilliseconds();
    const currentDate = new Date(date) ;
    
    const days = [
      "Sunday",
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
    ];
    const dayOfWeek = days[currentDate.getDay()];
    const year = currentDate.getFullYear();
    const month = String(currentDate.getMonth() + 1).padStart(2, "0"); // Adding 1 because months are zero-based
    const day = String(currentDate.getDate()).padStart(2, "0");

    const formattedDate = `${dayOfWeek}`;
    return formattedDate;
  };
  const getCoordinates = async () => {
    return await new Promise((resolve, reject) => {
      navigator.geolocation.getCurrentPosition(
        (position) => resolve(position),
        (error) => reject(error)
      );
    });
  };
  const getData = async (lat, lang) => {
    let url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lang}&appid=20df6ed2d3d499f39b1ec55b2f5a7406&units=metric`;

    try {
      const result = await axios.get(url);
      

      if (result.data) {
        setLoader(false);
      }
      getClimatePrediction(result?.data?.name);
    } catch (error) {
      console.log("ERROR ====> ", error);
    }
  };
  const currentDay = () => {
    const currentDate = new Date();
    const days = [
      "Sunday",
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
    ];
    const dayOfWeek = days[currentDate.getDay()];
    const year = currentDate.getFullYear();
    const month = String(currentDate.getMonth() + 1).padStart(2, "0"); // Adding 1 because months are zero-based
    const day = String(currentDate.getDate()).padStart(2, "0");

    const formattedDate = `${dayOfWeek}, ${day}-${month}-${year}`;
    
    
    return formattedDate;
  };
  const getClimatePrediction = (currentCity) => {
    axios
      .get(
        `https://api.weatherapi.com/v1/forecast.json?key=1612951226954bf0ada164306232012
        &q=${currentCity}&days=4&aqi=no&alerts=no`
      )
      .then((res) => {
        // setForecast(res?.data);
        dispatch(setForecast(res?.data));
      })
      .catch((err) => {
        console.error(err);
      });
  };

  useEffect(() => {
    getCoordinates()
      .then(async (result) => {
        await getData(result?.coords?.latitude, result?.coords?.longitude);
      })
      .catch((err) => {
        console.log("error from get coordinate ", err);
      });
  }, []);

  return (
    <>
      {" "}
      {loader ? (
        <Loader />
      ) : (
        <div className="background">
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>

          <div className="tempreture">
            <h1 style={{margin:"0px"}}>{forecast?.current?.temp_c} </h1>°
          </div>
          <img id="img" alt="" src={forecast?.current?.condition?.icon}></img>
          <h4 style={{margin:"0px"}}>{forecast?.current?.condition?.text}</h4>
          <div className="reelFeel">
            <p className="p" >Real Feal : {forecast?.current?.feelslike_c} °</p>
            <p className="p" >humidity : {forecast?.current?.humidity} %</p>
          </div>

          <div className="forThreeDays">
            {forecast?.forecast?.forecastday?.map((day, i) => {
              return (
                <div key={i} className="forOneDay">
                  <h5 style={{margin:"0px"}}>{dayOfWeek(day?.date).slice(0, 3)}</h5>
                  <img alt="" src={day?.day?.condition?.icon}></img>
                  <h5 style={{margin:"0px"}}>{day?.day?.maxtemp_c}°</h5>
                </div>
              );
            })}
          </div>

          <p >{currentDay()}</p>
          <div className="position">
           <div style={{color:"red" }}> <GiPositionMarker /></div>
            <p className="country">{forecast?.location?.country}</p> ,
            <p className="country">{forecast?.location?.name}</p>
          </div>
        </div>
      )}
    </>
  );
}

export default Weather;
