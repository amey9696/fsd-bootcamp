import React, { useState } from 'react';
// const initialState=0;
const Click=()=>{
    const [count,setCount]=useState(0);
    
    const IncNum=()=>{
        setCount(count +1);
    }

    const DecNum=()=>{
        if(count!=0){
            setCount(count -1);
        }
        else{
            alert("count is 0")
        }
    }

    const ResetNum=()=>{
        setCount(0);
    }
    
    return(
        <>
        <div class="container">
            <div class="header"><i class="fas fa-hand-point-up"></i> Clicker</div>
            <div class="main">
                <h1>{count}</h1>
                <div class="flex-container">
                    <div onClick={IncNum}><i class="fas fa-plus"></i></div>
                    <div onClick={ResetNum}><i class="fas fa-sync"></i></div>
                    <div onClick={DecNum}><i class="fas fa-minus"></i></div>
                </div>
            </div>
        </div>
        </>
    )
}

export default Click;