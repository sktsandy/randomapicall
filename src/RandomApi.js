import React, { useState, useEffect } from 'react';

const RandomApi = () => {
    const [person, setPerson] = useState();

    useEffect(() =>{
        const fetchApi = async () =>{
            const url = `https://api.randomuser.me/`;
            const response = await fetch(url);
            const resjson = await response.json();
            setPerson(resjson.results[0]);
        }

        fetchApi();
    }, [])
    return (
        <>

        {
            !person ? (<p> person can't found</p>) :(
                <>
                <h2 className="mt-5">Random person detail (Api)</h2>
                <hr />
                <h4> <b> Person First Name:</b> {person.name.first} </h4>
                <h4> <b> Last Name: </b> {person.name.last} </h4>
                <h5> <b> city: </b> {person.location.city} </h5>
                <p> <b> Email: </b> {person.email} </p>
                <img style ={{width:"200px"}} src={person.picture.large} alt="random img"/>
                </>
            )
        }

       
           
        </>
    )
}

export default RandomApi;
