import React from 'react';
import Navigation from '../Shared/Navigation/Navigation';
import AppointHeader from './AppointmentHeader/AppointHeader';
import AvaiableAppointment from './AvaiableAppointment/AvaiableAppointment';

const Appointment = () => {
    const [date, setDate] = React.useState(new Date());
    return (
        <div>
            <Navigation></Navigation>
            <AppointHeader date={date} setDate={setDate}></AppointHeader>
            <AvaiableAppointment date={date} setDate={setDate}></AvaiableAppointment>

        </div>
    );
};

export default Appointment;