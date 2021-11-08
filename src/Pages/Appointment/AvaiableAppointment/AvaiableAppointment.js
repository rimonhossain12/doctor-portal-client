import { Alert, Container, Grid ,Typography} from '@mui/material';
import React, { useState } from 'react';
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
        id: '4', name: 'Pediatric Dental', time: '6.00 AM - 7.00 AM',
        sit: '10 SPACES Available'
    },

    {
        id: '5', name: 'oral Surgery', time: '7.00 AM - 8.00 AM',
        sit: '10 SPACES Available'
    },

    {
        id: '6', name: 'neuro medicine ', time: '10.00 AM - 10.00 AM',
        sit: '10 SPACES Available'
    },


]

const AvaiableAppointment = ({ date }) => {
    const [bookingSuccess,setBookingSuccess] = useState(false);
    return (
        <Container>
            <Typography variant="h4" sx={{color:'info.main',fontWeight:400,mb:3,mt:3}}>
                Available Appointment on {date.toDateString()}
            </Typography>
            {bookingSuccess && <Alert sx={{width:'75%', mb:2}} severity="success">Booking added successfully!</Alert>}

            <Grid container spacing={2} sx={{mb:2}}>
              {
                  bookings.map(booking => <Booking
                  key={booking.id}
                    booking={booking}
                    date={date}
                      setBookingSuccess={setBookingSuccess}
                  ></Booking>)
              }
            </Grid>
        </Container> 
    );
};

export default AvaiableAppointment;