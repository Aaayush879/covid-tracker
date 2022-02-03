import React,{useState,useEffect} from 'react';
import './Head.css';


const Head=()=>{
    
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
    
    return(
        <div className="a" style={{width:'100%' , height:'45vh'}}>
            <h1 className='c text-light'>Covid-19 tracker</h1>
            <br/>
            <div className="worldStats-box">
                <h6 className="totalNumbers">Case :{data.TotalConfirmed}</h6>
                <h6 className="about">Deadth :{data.TotalDeaths}</h6>
            </div>
            
            
            

        </div>
    )
}
export default Head;
