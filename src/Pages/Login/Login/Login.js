import { Container, Grid, TextField, Typography, Button } from '@mui/material';
import React, { useState } from 'react';
import login from '../../../images/login.png';

const Login = () => {

    const [loginData,setLoginData] = useState({});
    
    const handleOnChange = (e) => {
        const field = e.target.name;
        const value = e.target.value;
        const newLoginData = {...loginData};
        newLoginData[field] = value;
        setLoginData(newLoginData);
    }
    const handleLoginSubmit = (e) => {
        alert('Hello')
        e.preventDefault();
    }
    return (
        <Container>
            <Grid container spacing={2}>
                <Grid sx={{ mt: 8 }} item xs={12} md={6}>
                    <Typography variant="body1" gutterBottom component="div">Login</Typography>
                    <form onSubmit={handleLoginSubmit}>
                        <TextField id="standard-basic"
                            sx={{ width: '75%', m: 1 }}
                            label="Your Email" variant="standard"
                            name="email"
                            onChange={handleOnChange}
                            /><br />
                        <TextField id="standard-basic" label="Your Password"
                            sx={{ width: '75%', m: 1 }}
                            type="password"
                            name="password"
                            onChange={handleOnChange}
                            variant="standard" />
                        <Button type="submit" variant="contained" sx={{ width: '75%', m: 1 }}>Login</Button>
                    </form>
                </Grid>
                <Grid item xs={12} md={6}>
                    <img src={login} style={{ width: '100%' }} alt="" />
                </Grid>
            </Grid>
        </Container>
    );
};

export default Login;