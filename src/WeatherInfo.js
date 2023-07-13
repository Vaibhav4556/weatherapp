import React from 'react'
import axios from "axios";
import {useState,useEffect} from "react"

function WeatherInfo(props) {
   
   
    console.log(props);


    const [data,setData] = useState("")
    
   

 console.log(data);
  return (


    <div>
        {
            props  ? <h1>hello</h1>:<></>
        }
    </div>
    
  )
}

export default WeatherInfo