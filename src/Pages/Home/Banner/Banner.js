import React from 'react';
import chair from '../../../images/chair.png';
import bg from '../../../images/bg.png';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import { Button, Typography, Container } from '@mui/material';
import { height } from '@mui/system';

const bannerBackground = {
    background: `url(${bg})`

}

const verticalCenter = {
    display: 'flex',
    alignItem: 'center',
    marginTop:'70px',
    height: 400

}

const Banner = () => {
    return (
        <Container style={{ bannerBackground }} sx={{ flexGrow: 1 }}>
            <Grid container spacing={2}>
                <Grid item style={{ ...verticalCenter,textAlign: 'left' }} xs={12} md={6} >
                  <Box>
                        <Typography variant="h3">
                            Your New Smile <br />
                            Starts Here
                        </Typography>
                        <Typography variant="h6" sx={{ fontSize: 13, color: 'gray', fontWeight: 400 }}>
                            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Optio mollitia dolor sint doloribus praesentium, voluptatibus ea culpa qui a sit.
                        </Typography>
                        <Button variant="contained" style={{ backgroundColor: '#5CE7ED' }}>Get Appointment</Button>
                  </Box>
                </Grid>
                <Grid item xs={12} md={6} style={verticalCenter}>
                    <img style={{ width: '400px'}} src={chair} alt="" />
                </Grid>
            </Grid>
        </Container>
    );
};

export default Banner;