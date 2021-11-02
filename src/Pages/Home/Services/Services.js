import React from 'react';
import { experimentalStyled as styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import { Container } from '@mui/material';
import Service from '../Service/Service';
import fluoride from '../../../images/fluoride.png';
import whitening from '../../../images/whitening.png';
import cavity from '../../../images/cavity.png';

const services = [
    {
        name: 'Fluoride Treatment',
        description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ut eveniet ex nulla temporibus mollitia ducimus consequuntur ad optio voluptatem qui.',
        img:fluoride
    },

    {
        name: 'Cavity Filling',
        description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ut eveniet ex nulla temporibus mollitia ducimus consequuntur ad optio voluptatem qui.',
        img: cavity
    },
    {
        name: 'Teach Whitening',
        description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ut eveniet ex nulla temporibus mollitia ducimus consequuntur ad optio voluptatem qui.',
        img: whitening
    }
]

const Services = () => {
    return (
        <Box sx={{ flexGrow: 1 }}>
            <Container>
                <Typography sx={{ fontWeight: '500', m: 5 , color: 'success.main' }} variant="h6" component="div">
                   OUR SERVICES
                </Typography>
                <Typography sx={{ fontWeight: '600', m: 2  }} variant="h4" component="div">
                        Services We provided
                </Typography>
                <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
                    {
                        services.map(service => <Service
                            key={service.name}
                            service={service}
                        ></Service>)
                    }
                </Grid>
            </Container>
        </Box>
    );
};

export default Services;