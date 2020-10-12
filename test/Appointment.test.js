import React from 'react'
import ReactDOM from 'react-dom'
import { Appointment, AppointmentsDayView } from '../src/Appointment'

describe('Appointment', () => {

    let container
    let customer

    beforeEach(() => {
        container = document.createElement('div')
    })

    const render = component => ReactDOM.render(component, container)

    it('renders the customer name', () => {
        customer = { firstName: 'Ashley' }
        render(<Appointment customer={ customer }/>, container)

        expect(container.textContent).toMatch('Ashley')
    })

    it('renders another customer name', () => {
        customer = { firstName: 'Jordan' }
        render(<Appointment customer={ customer }/>, container)

        expect(container.textContent).toMatch('Jordan')
    })
})

describe('AppointmentsDayView', () => {

    let container

    beforeEach(() => {
        container = document.createElement('div')
    })

    const render = component => ReactDOM.render(component, container)

    it('renders a DIV with the right ID', () => {
        render(<AppointmentsDayView appointments={ [] }/>, container)

        expect(container.querySelector('div#appointmentsDayView')).not.toBeNull()
    })
})