import React from 'react';
import Navigation from '../Shared/Navigation/Navigation';
import AppointHeader from './AppointmentHeader/AppointHeader';
import AvaiableAppointment from './AvaiableAppointment/AvaiableAppointment';

const Appointment = () => {
    return (
        <div>
            <Navigation></Navigation>
            <AppointHeader></AppointHeader>
            <AvaiableAppointment></AvaiableAppointment>

        </div>
    );
};

export default Appointment;