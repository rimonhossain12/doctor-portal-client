import { Container, Grid, Typography } from '@mui/material';
import React from 'react';
import chair from '../../../images/chair.png';
import Calender from '../../Shared/Calender/Calender';

const AppointHeader = () => {
    return (
        <Container>
            <Grid container spacing={2}>
                <Grid item xs={12} md={6} >
                   {/* <Typography>
                       APPOINTMENT
                   </Typography> */}
                   <Calender></Calender>
                </Grid>
                <Grid item xs={12} md={6}>
                    <img src={chair} style={{ width: '100%' }} alt="" />
                </Grid>
            </Grid>
        </Container>
    );
};

export default AppointHeader;