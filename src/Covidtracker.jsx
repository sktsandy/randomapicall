import React, { useState, useEffect } from 'react';

const Covidtracker = () => {
    const [data, setData] = useState();
    useEffect(() =>{
        const fetchApi = async () =>{
            const response =await fetch(`https://api.covid19india.org/data.json`);         
            const resjson =await response.json();
            setData(resjson.statewise[0]);
        }

        fetchApi();
    }, [])

    return (
        <>

    {
        !data ? (<p> data can't found </p>) : (
            <>
            <h1 className="text-center my-5">  COVID19 TRACKER APP </h1> 
                <div className="covid_card">
                    <div className="container">
                        <div className="row">

                        <div className="col-md-4">
                            <div className="card_inner">
                                <h4>  OUR COUNTRY</h4>
                                <h3> INDIA </h3>
                            </div>
                        </div>

                            <div className="col-md-4">
                            <div className="card_inner">
                                <h4> TOTLE ACTIVE </h4>
                                <h3> {data.active} </h3>
                                </div>
                            </div>

                            <div className="col-md-4">
                            <div className="card_inner">
                            <h4> Total CONFORMED </h4>
                            <h3> {data.confirmed} </h3>
                            </div>
                            </div>

                            <div className="col-md-4">
                            <div className="card_inner">
                            <h4> Total  DEATHS  </h4> 
                            <h3> {data.deaths} </h3>
                            </div>
                            </div>

                            <div className="col-md-4">
                            <div className="card_inner">
                             <h4> Total  RECOVERED  </h4>
                             <h3> {data.recovered} </h3>
                             </div>
                            </div>

                            <div className="col-md-4">
                            <div className="card_inner">
                           <h4> LAST  UPDATED </h4>
                           <h3> {data.lastupdatedtime} </h3>
                           </div>
                            </div>
                        </div>
                    </div>
                </div>
         
            </>
        )
    }

        </>
    )
}

export default Covidtracker;




