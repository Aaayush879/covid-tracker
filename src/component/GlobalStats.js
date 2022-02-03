import React,{useEffect, useState} from 'react';

import './GlobalStats.css';

const GlobalStats = ()=> {
    const [data, setData] = useState([]);
    const covidData= async()=>{
        const res = await fetch('https://api.covid19api.com/summary');
        const actualData = await res.json();
        let corona = actualData.Global 
        console.log(corona);
        setData(corona);
    }
    useEffect(()=>{
        covidData();
    },[])
    return (
        <div className="worldStats-box">
            <h1 className="totalNumbers">{props.total}</h1>
            <p className="about">{props.about}</p>
        </div>
        
            
             
        
    )
}

export default GlobalStats;