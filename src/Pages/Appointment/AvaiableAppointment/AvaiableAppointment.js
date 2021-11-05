import { Container, Grid ,Typography} from '@mui/material';
import React from 'react';
import Booking from '../Booking/Booking';

const bookings = [
    {
        id: '1', name: 'Teeth Orthodontic', time: '8.00 AM - 9.00 AM',
        sit: '10 SPACES Available'
    },

    {
        id: '2', name: 'Cosmetic Dentistry', time: '10:05 AM - 11.30 AM',
        sit: '10 SPACES Available'
    },
    {
        id: '3', name: 'Cavity Protection', time: '7.00 AM - 8.30 AM',
        sit: '10 SPACES Available'
    },
    {
        id: '4', name: 'Teeth Orthodontic', time: '8.00 AM - 9.00 AM',
        sit: '10 SPACES Available'
    },

    {
        id: '5', name: 'Teeth Orthodontic', time: '8.00 AM - 9.00 AM',
        sit: '10 SPACES Available'
    },

    {
        id: '6', name: 'Teeth Cleaning', time: '8.00 AM - 6.00 AM',
        sit: '10 SPACES Available'
    },


]

const AvaiableAppointment = ({ date }) => {
    return (
        <Container>
            <Typography variant="h4" sx={{color:'info.main',fontWeight:400,mb:3,mt:3}}>
                Available Appointment on {date.toDateString()}
            </Typography>
            <Grid container spacing={2}>
              {
                  bookings.map(booking => <Booking
                  key={booking.id}
                    booking={booking}
                    date={date}
                  ></Booking>)
              }
            </Grid>
        </Container> 
    );
};

export default AvaiableAppointment;