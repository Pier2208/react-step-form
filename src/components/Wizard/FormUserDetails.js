import React from 'react'
import PropTypes from 'prop-types'

//material-ui
import { TextField, Button } from '@material-ui/core'

const FormUserDetails = ({ nextStep, handleChange, values }) => {
    return (
        <div style={{
            display: 'flex',
            flexFlow: 'column',
            width: '600px',
            margin: '0 auto'
        }}>
            <h1 style={{ color: 'darkblue' }}>Enter your personal details</h1>
            <form
                style={{ display: 'flex', flexFlow: 'column', width: '400px' }}
                noValidate>
                <TextField
                    id="firstName"
                    label="Firstname"
                    value={values.firstName}
                    onChange={handleChange('firstName')}
                    margin='normal'
                />

                <TextField
                    id="lastName"
                    label="Lastname"
                    value={values.lastName}
                    onChange={handleChange('lastName')}
                    margin='normal'
                />

                <TextField
                    id="email"
                    label="Email"
                    value={values.email}
                    onChange={handleChange('email')}
                    margin='normal'
                />
            </form>
            <Button
                style={{width: "100px", marginTop: '30px'}}
                variant="contained"
                color="primary"
                onClick={nextStep}
            >
                Continue
            </Button>
        </div>
    )
}

FormUserDetails.propTypes = {
    nextStep: PropTypes.func.isRequired,
    handleChange: PropTypes.func.isRequired,
    values: PropTypes.object.isRequired
}

export default FormUserDetails
