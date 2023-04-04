import { Grid, TextField } from "@mui/material";
import { Box } from "@mui/system";
import { Button } from "bootstrap";
import React, { useState } from "react";
import { json } from "react-router-dom";
const Login = (props) => {
  const url = process.env.NODE_ENV === 'production'
  ? process.env.REACT_APP_API_URL_DEPLOY
  : process.env.REACT_APP_API_URL_LOCAL;
 const [email,setEmail]=useState('')
 const [password,setPassword]=useState('')
 async function loginUser(event){
  event.preventDefault()
  const response = await fetch( `${url}login`,{
    method:'POST',
    headers:{
      'Content-Type':'application/json'
    },
    body:JSON.stringify({
      email,
      password,
    }),
  })
  const data = await response.json()
  console.log(data)
 }

  return (
 <div>
  <h1>Login</h1>
  <form  onSubmit={loginUser}>
  <Grid item xs={8}>
                            <TextField
                           value={email}
                           onChange={(e) => setEmail(e.target.value)}
                           type="email"
                          
                              label="email"
                              variant="outlined"
                            />
                            
                          </Grid>
                          <Grid item xs={8}>
                            <TextField
                              	value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                type="password"
                               
                              label="password"
                              variant="outlined"
                            />
                            
                          </Grid>
                          <button type="submit" value="Login">Login</button>
                    </form>
                      
 </div>

  );
};

export default Login;
