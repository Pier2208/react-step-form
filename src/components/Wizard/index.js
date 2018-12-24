import React, { Component } from 'react'

//components
import FormUserDetails from './FormUserDetails'


class Wizard extends Component {

    state = {
        step: 1,
        firstName: '',
        lastName: '',
        email: '',
        occupation: '',
        city: '',
        bio: ''
    }

    //proceed to next step
    nextStep = () => {
        this.setState({
            step: this.state.step + 1
        })
    }

    //go back to previous step
    prevStep = () => {
        this.setState({
            step: this.state.step - 1
        })
    }

    //handle fields chane
    handleChange = input => event => {
        this.setState({
            [input]: event.target.value
        })
    }

    render() {

        const { step } = this.state
        const { firstName, lastName, email, occupation, city, bio } = this.state

        const values = { firstName, lastName, email, occupation, city, bio }

        //depending on the step, render a specific component

        switch (step) {
            case 1:
                //if step 1, render child component <FormUserDetails/> and pass it the nextStep method + handleChange
                // method to update parent state + all form values
                return (
                    <FormUserDetails
                        nextStep={this.nextStep}
                        handleChange={this.handleChange}
                        values={values}
                    />
                )
            case 2:
                return (
                    <h1>FormPersonalDetails</h1>
                )
            case 3:
                return (
                    <h1>Confirm</h1>
                )
            case 3:
                return (
                    <h1>Success</h1>
                )
        }

        return (
            <div>

            </div>
        )
    }
}


export default Wizard
