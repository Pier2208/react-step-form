import React from 'react'
import PropTypes from 'prop-types'

//material-ui
import { TextField, Button } from '@material-ui/core'

const FormPersonalDetails = ({ prevStep, nextStep, handleChange, values }) => {
    return (
        <div style={{
            display: 'flex',
            flexFlow: 'column',
            width: '600px',
            margin: '0 auto'
        }}>
            <h1 style={{ color: 'darkblue' }}>Step 2: Personal Details</h1>
            <form
                style={{ display: 'flex', flexFlow: 'column', width: '400px' }}
                noValidate>
                <TextField
                    id="occupation"
                    name="occupation"
                    label="Occupation"
                    value={values.occupation}
                    onChange={handleChange}
                    margin='normal'
                />

                <TextField
                    id="city"
                    name="city"
                    label="City"
                    value={values.city}
                    onChange={handleChange}
                    margin='normal'
                />

                <TextField
                    id="bio"
                    name="bio"
                    label="Bio"
                    value={values.bio}
                    onChange={handleChange}
                    margin='normal'
                />
            </form>
            <div style={{display: 'flex'}}>
                <Button
                    style={{ width: "100px", marginTop: '30px', marginRight: '30px' }}
                    variant="contained"
                    onClick={prevStep}
                >
                    Back
            </Button>

                <Button
                    style={{ width: "100px", marginTop: '30px' }}
                    variant="contained"
                    color="primary"
                    onClick={nextStep}
                >
                    Continue
            </Button>
            </div>
        </div>
    )
}

FormPersonalDetails.propTypes = {
    nextStep: PropTypes.func.isRequired,
    prevStep: PropTypes.func.isRequired,
    handleChange: PropTypes.func.isRequired,
    values: PropTypes.object.isRequired
}

export default FormPersonalDetails