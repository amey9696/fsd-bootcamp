import React,{useState} from 'react';
import {useHistory} from 'react-router-dom';

const Login = () => {
    const history=useHistory();
    const [username,setUsername]=useState();
    const [password,setPassword]=useState();
    const login=()=>{
        if(username==='admin' && password==="admin"){
            history.page('/home');
        }
        else{
            alert("wrong credentials");
        }
    }
    return (
        <>
            <form className="container">
                <label for="username">Username:</label>
                <input className="form-control" type="text" id="username" 
                    name="username" value={username}
                    onChange={(event)=>setUsername(event.target.value)}
                />
                <br/>
                <label for="password">Password:</label>
                <input className="form-control" type="password" id="password" 
                    name="username" value={password}
                    onChange={(event)=>setPassword(event.target.value)}
                />
                <br/>
                <button className="btn btn-primary" type="submit" onClick={login()}>Login</button>
            </form>
        </>
    )
}

export default Login;