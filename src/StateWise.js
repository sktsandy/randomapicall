import React, {useEffect, useState} from 'react';
import './StateWise.css';

const StateWise = () => {
    const [data, setData] = useState([]);
    const [search, setSearch] = useState(data);
    const fetchApi = async () =>{
        const url = `https://api.covid19india.org/data.json`
        const res = await fetch(url);
        const resjson = await res.json();

        setData(resjson.statewise);
    }

    useEffect(() => {
        fetchApi();
    }, [])

    const SearchState = (event) =>{
        setSearch(event.target.value);
    }

    return (
        <>

        {
            !data ? (<p> data can;t found </p>) : (
                 <>
                <div className="container-fluid mt-5">
                    <div className="main_heading">
                        <h1 className="text-center mb-5"> <span  className="font-weight-bold"> INDIA </span> 
                        COVID-19 Dashboard </h1>
                        {/** <input type="search" onChange={ SearchState } value={search} />  */} 
                    </div>
                <div className="table-responsive">
                    <table className="table table-hover">
                         <thead className="thead-dark">
                            <tr>
                                <th>State</th>
                                <th> Confirmed </th>
                                <th> Recovered </th>
                                <th> Deaths</th>
                                <th> Active </th>
                                <th> update</th>                           
                            </tr>
                        </thead>

                        <tbody>
                        {
                            data.map((curElm, index) =>{
                            
                                return(
                                    <tr key={index}>
                                        <th> {curElm.state} </th>
                                        <td> {curElm.confirmed} </td>
                                        <td> {curElm.recovered} </td>
                                        <td> {curElm.deaths} </td>
                                        <td> {curElm.active} </td>
                                        <td> {curElm.lastupdatedtime} </td>
                                    </tr>
                                )
                              
                             })
                        }
    
                    </tbody>
                    </table>
                </div>
            </div>
                 </>
            )
        }
   
        </>
    )
}

export default StateWise;
