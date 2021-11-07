import { Container, Grid, TextField, Typography, Button, Alert, CircularProgress } from '@mui/material';
import React, { useState } from 'react';
import { NavLink, useLocation,useHistory } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';
import login from '../../../images/login.png';

const Login = () => {

    const [loginData, setLoginData] = useState({});
    const { user, loginUser, isLoading, authError, } = useAuth();
    const location = useLocation();
    const history = useHistory();

    const handleOnChange = (e) => {
        const field = e.target.name;
        const value = e.target.value;
        const newLoginData = { ...loginData };
        newLoginData[field] = value;
        setLoginData(newLoginData);
    }
    const handleLoginSubmit = (e) => {
        loginUser(loginData.email, loginData.password,location,history)
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
                        <NavLink style={{ textDecoration: 'none' }} to="/register">
                            <Button variant="text">NEW USER? PLEASE REGISTER</Button>
                        </NavLink>
                        {isLoading && <CircularProgress />}
                        {user.email ? <Alert severity="success">User Created  successfully! </Alert> : authError&& <Alert severity="error">{authError}</Alert>}
                        {/* {authError &&} */}
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