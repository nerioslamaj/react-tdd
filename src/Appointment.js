import React from 'react'

const appointmetTimeOfDay = startsAt => {
    const [h, m] = new Date(startsAt).toTimeString().split(':')

    return `${h}:${m}`
}

export const Appointment = ({ customer: { firstName } }) => (
    <div>{firstName}</div>
)

export const AppointmentsDayView = ({ appointments }) => (
    <div id='appointmentsDayView'>
        <ol>
            {appointments.map((appointment) => (
                <li key={appointment.startsAt}>{appointmetTimeOfDay(appointment.startsAt)}</li>
            ))}
        </ol>
    </div>
)