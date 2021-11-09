import { Grid } from '@mui/material';
import * as React from 'react';
import Calender from '../../../Shared/Calender/Calender';
import Appointments from '../../Appointments/Appointments';

const DashBoardHome = () => {
    const [date, setDate] = React.useState(new Date());

    return (
        <div>
            <Grid container spacing={2}>
                <Grid item xs={12} sm={5}>
                    <Calender
                        date={date}
                        setDate={setDate}
                    ></Calender>
                </Grid>
                <Grid item sx={12} sm={7}>
                    <Appointments
                        date={date}
                    /*  setDate={setDate} */
                    ></Appointments>
                </Grid>
            </Grid>
        </div>
    );
};

export default DashBoardHome;