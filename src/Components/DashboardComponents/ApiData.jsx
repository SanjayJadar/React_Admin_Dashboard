import React, { useEffect, useState } from "react"; 
import axios from 'axios';

function ApiData() {
    const [data, setData] = useState([]);

    useEffect(()=>{
        const fetchApi = async()=>{
            const fetchData = await axios.get('https://reactmusicplayer-ab9e4.firebaseio.com/project-data.json');
            // setData(fetchData);
            setData(fetchData.data.dasbhoardPage); 
        }
        fetchApi() 
    },[])
    return data;
}


export default ApiData;