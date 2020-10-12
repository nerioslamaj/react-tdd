import React from 'react'
import ReactDOM from 'react-dom'
import { Appointment } from '../src/Appointment'

describe('Appointment', () => {
    it('renders the customer name', () => {
        const customer = { firstName: 'Ashley' }
        const container = document.createElement('div')

        ReactDOM.render(<Appointment customer={ customer }/>, container)

        expect(container.textContent).toMatch('Ashley')
    })

    it('renders another customer name', () => {
        const customer = { firstName: 'Jordan' }
        const container = document.createElement('div')

        ReactDOM.render(<Appointment customer={ customer }/>, container)

        expect(container.textContent).toMatch('Jordan')
    });
});