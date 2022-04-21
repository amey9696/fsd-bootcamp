import React, {useState, useEffect} from 'react';
import axios from 'axios';
const count=1;
//useEffect ==componentDidMount();
const LoadImages=()=>{
    const [state, setState]=useState([]);
    useEffect(()=>{
        axios.get("https://api.unsplash.com/photos?client_id=qLAITBfS3oz_YAC4wWIEmMmUJPzL-Xhz9GYQz1jixp8")
        .then((data)=>{
            setState(data);
        })
    },[count])
    return state;
}

export {LoadImages};