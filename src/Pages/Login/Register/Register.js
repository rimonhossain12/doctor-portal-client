import { Container, Grid, TextField, Typography, Button, CircularProgress, Alert } from '@mui/material';
import React, { useState } from 'react';
import { useLocation, useHistory } from 'react-router-dom';

import { NavLink } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';
import login from '../../../images/login.png';

const Register = () => {
    const [loginData, setLoginData] = useState({});
    const { user, registerUser, isLoading, authError } = useAuth()
    const location = useLocation();
    const history = useHistory();

    const handleOnBlur = (e) => {
        const field = e.target.name;
        const value = e.target.value;
        const newLoginData = { ...loginData };
        newLoginData[field] = value;
        // console.log(newLoginData);
        setLoginData(newLoginData);
    }
    const handleLoginSubmit = (e) => {
        if (loginData.password !== loginData.password2) {
            alert('Your password not valid');
            return;
        }
        console.log(loginData.email, loginData.name, loginData.email);
        registerUser(loginData.email, loginData.name, loginData.email, location, history);
        e.preventDefault();
    }

    return (
        <Container>
            <Grid container spacing={2}>
                <Grid sx={{ mt: 8 }} item xs={12} md={6}>
                    <Typography variant="body1" gutterBottom component="div">Register</Typography>
                    {!isLoading && <form onSubmit={handleLoginSubmit}>
                        <TextField id="standard-basic"
                            sx={{ width: '75%', m: 1 }}
                            label="Your Name" variant="standard"
                            name="name"
                            type="text"
                            onBlur={handleOnBlur}
                        />
                        <TextField id="standard-basic"
                            sx={{ width: '75%', m: 1 }}
                            label="Your Email" variant="standard"
                            name="email"
                            type="email"
                            onBlur={handleOnBlur}
                        /><br />
                        <TextField /* id="standard-basic" */ label="Your Password"
                            sx={{ width: '75%', m: 1 }}
                            type="password"
                            name="password"
                            onBlur={handleOnBlur}
                            variant="standard" />

                        <TextField id="standard-basic" label="Re Type Your Password"
                            sx={{ width: '75%', m: 1 }}
                            type="password"
                            name="password2"
                            onBlur={handleOnBlur}
                            variant="standard" />
                        <Button type="submit" variant="contained" sx={{ width: '75%', m: 1 }}>Register</Button>
                        <NavLink style={{ textDecoration: 'none' }} to="/login">
                            <Button variant="text">Already Register? PLEASE Login</Button>

                        </NavLink>
                    </form>}
                    {isLoading && <CircularProgress />}
                    {user.email && <Alert severity="success">User Created  successfully! </Alert>}
                    {authError && <Alert severity="error">{authError}</Alert>}

                </Grid>
                <Grid item xs={12} md={6}>
                    <img src={login} style={{ width: '100%' }} alt="" />
                </Grid>
            </Grid>
        </Container>
    );
};

export default Register;