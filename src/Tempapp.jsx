import React, { useState, useEffect} from 'react';

const Teamapp = () => {
    const [city, setCity] = useState();
    const [search, setSearch] = useState("Mumbai");

   useEffect(() => {
    const fetchApi = async () =>{
        const url = `http://api.openweathermap.org/data/2.5/weather?q=${search}&units=metric&appid=60c8f58c0b4af5ae65c86f9cba367dea`
        const response = await fetch(url);
        const resjson = await response.json();
        
        setCity(resjson.main);
    } 
    
    fetchApi();
   }, [search] )

    return (
        <>
            <div className="box">
                <div className="inputData">
                    <input type="search"
                    className="input_feild mt-5 text-center"
                    value={search}
                    onChange={ (event) =>{
                       setSearch(event.target.value);
                    }}
                    />

        {
            !city ?(<p className="error_msg"> No Data Found </p>) :  (
                <div>
                    <h2 className="location">  <i className="fas fa-street-view"></i> {search}</h2>
              
                <h3 className="temp">
               {city.temp} °Cel
                </h3>
                <h4 className="tempmin_max"> min: {city.temp_min} °Cel | max: {city.temp_max} °Cel </h4>
                <p className="text-center"> Humidity {city.humidity} </p>
               
                </div>
                
                )
        }

        </div>

                <div className="wave"> </div>
                <div className="wave_two"> </div>
                <div className="wave_three"> </div>
            </div>

        </>
    )
}

export default Teamapp;
